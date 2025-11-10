import { NextResponse } from "next/server";
import { z } from "zod";

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

  // Integração real (ex.: Resend) pode ser adicionada aqui se RESEND_API_KEY estiver setada
  // Por ora, apenas loga no servidor:
  console.log("Novo contato:", { name: data.name, email: data.email, message: data.message });

  return NextResponse.json({ ok: true });
}

