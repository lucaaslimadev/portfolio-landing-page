import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  // honeypot
  company: z.string().optional()
});

// Rate limit simples em memória (não persistente; suficiente para demo)
const lastHits = new Map<string, number>();
const WINDOW_MS = 15_000; // 15s

// Inicializar Resend apenas se tiver API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  const now = Date.now();
  const last = lastHits.get(ip) ?? 0;
  if (now - last < WINDOW_MS) {
    return NextResponse.json({ ok: false, error: "Muitas requisições, tente novamente em instantes." }, { status: 429 });
  }
  lastHits.set(ip, now);

  const raw = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 400 });
  }
  const data = parsed.data;
  // honeypot: se preenchido, ignorar
  if (data.company && data.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Tentar enviar email se Resend estiver configurado
  let emailSent = false;
  let emailError: any = null;

  // Verificar se todas as variáveis estão configuradas
  const hasResendConfig = 
    process.env.RESEND_API_KEY && 
    process.env.RESEND_FROM_EMAIL && 
    process.env.RESEND_TO_EMAIL;

  console.log("🔍 Verificando configuração do Resend:", {
    hasApiKey: !!process.env.RESEND_API_KEY,
    hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
    hasToEmail: !!process.env.RESEND_TO_EMAIL,
    fromEmail: process.env.RESEND_FROM_EMAIL,
    toEmail: process.env.RESEND_TO_EMAIL
  });

  if (resend && hasResendConfig) {
    try {
      console.log("📤 Tentando enviar email via Resend...");
      
      const result = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.RESEND_TO_EMAIL!,
        replyTo: data.email,
        subject: `Novo contato do portfólio - ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B9DFF; border-bottom: 2px solid #8B9DFF; padding-bottom: 10px;">
              Novo contato recebido
            </h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Nome:</strong> ${data.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p style="margin: 10px 0;"><strong>Mensagem:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>Este email foi enviado automaticamente pelo formulário de contato do seu portfólio.</p>
              <p>Para responder, clique em "Responder" ou envie um email para: <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
          </div>
        `,
      });
      
      console.log("📬 Resposta do Resend:", JSON.stringify(result, null, 2));
      
      if (result.error) {
        emailError = {
          message: result.error.message || "Erro desconhecido do Resend",
          name: result.error.name,
          statusCode: result.error.statusCode
        };
        console.error("❌ Erro do Resend:", emailError);
      } else if (result.data) {
        emailSent = true;
        console.log("✅ Email enviado com sucesso! ID:", result.data.id);
        console.log("📧 Para:", process.env.RESEND_TO_EMAIL);
      }
    } catch (error: any) {
      emailError = {
        message: error.message || "Erro ao enviar email",
        name: error.name,
        stack: error.stack
      };
      console.error("❌ Erro ao enviar email:", emailError);
    }
  } else {
    // Se não tiver Resend configurado, apenas loga (útil para desenvolvimento)
    console.log("📧 Novo contato recebido (Resend não configurado):");
    console.log("Nome:", data.name);
    console.log("Email:", data.email);
    console.log("Mensagem:", data.message);
    console.log("\n⚠️ Para receber emails, configure as variáveis de ambiente:");
    console.log("  - RESEND_API_KEY:", !!process.env.RESEND_API_KEY);
    console.log("  - RESEND_FROM_EMAIL:", !!process.env.RESEND_FROM_EMAIL);
    console.log("  - RESEND_TO_EMAIL:", !!process.env.RESEND_TO_EMAIL);
  }

  // Retornar sucesso mesmo se o email falhar (para não quebrar UX)
  // Mas incluir informação sobre o status do email
  return NextResponse.json({ 
    ok: true, 
    emailSent,
    emailError: emailError ? {
      message: emailError.message || String(emailError),
      name: emailError.name,
      statusCode: emailError.statusCode
    } : null
  });
}

