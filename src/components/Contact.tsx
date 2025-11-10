'use client';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { Toast } from "@/components/Toast";
import { useState } from "react";

const ContactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Conte mais sobre o seu projeto"),
  company: z.string().optional(),
});
type ContactData = z.infer<typeof ContactSchema>;

export function Contact() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });

  async function onSubmit(data: ContactData) {
    if (data.company) {
      // Honeypot detectado - spam
      return;
    }

    try {
      const { company, ...formData } = data;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const result = await res.json();
      
      if (!res.ok) {
        throw new Error(result.error || "Falha ao enviar");
      }
      
      // Verificar se houve erro no envio do email (mas formulário foi processado)
      if (result.emailError) {
        console.error("Erro ao enviar email:", result.emailError);
        // Ainda mostra sucesso, mas loga o erro
      }
      
      reset();
      setToast({ message: "Mensagem enviada com sucesso! Retornarei em breve.", type: "success" });
    } catch (error: any) {
      console.error("Erro ao enviar formulário:", error);
      setToast({ 
        message: error.message || "Não foi possível enviar agora. Tente novamente em instantes.", 
        type: "error" 
      });
    }
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <section id="contato" className="relative">
        <div className="container">
          <SectionReveal className="mb-10">
            <div className="text-center">
              <AnimatedHeading
                title="Vamos conversar"
                subtitle="Me conte sobre sua ideia, projeto ou oportunidade."
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-glass p-6 md:p-8 grid md:grid-cols-2 gap-6 shadow-professional-lg"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Nome</label>
                <input
                  id="name"
                  {...register("name")}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 placeholder:text-white/30 transition-all"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">E-mail</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="voce@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 placeholder:text-white/30 transition-all"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Mensagem</label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Escreva sua mensagem..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 placeholder:text-white/30 transition-all resize-none"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Honeypot escondido */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none', width: 0, height: 0, overflow: 'hidden' }}>
                <label htmlFor="company">Empresa (deixe em branco)</label>
                <input
                  id="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("company")}
                  aria-hidden="true"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group w-full md:w-auto bg-gradient-to-r from-navy-700 via-navy-600 to-accent/80 text-white shadow-lg shadow-accent/20 hover:from-navy-600 hover:via-navy-500 hover:to-accent hover:shadow-xl hover:shadow-accent/30 border border-white/10 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    "Enviar mensagem"
                  )}
                </button>
              </div>
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

