'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { RippleButton } from "@/components/RippleButton";
import { Particles } from "@/components/Particles";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { profileBlurDataUrl } from "@/lib/images";
import { useRef, useState } from "react";

export function Hero() {
  const [imgSrc, setImgSrc] = useState<string>("/profile.png");
  function onImgError() {
    if (imgSrc === "/profile.png") setImgSrc("/public:profile.png");
    else if (imgSrc === "/public:profile.png") setImgSrc("/profile.jpg");
    else if (imgSrc === "/profile.jpg") setImgSrc("/profile.webp");
  }
  const imgCardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgCardRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-28 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      <Particles />
      <div className="container relative grid md:grid-cols-[1.2fr,0.8fr] items-center gap-10">
        <div className="space-y-6">
          <motion.span
            initial={{ y: 10, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent/90 bg-gradient-to-r from-accent/20 to-purple-500/20 px-4 py-1.5 rounded-full border border-accent/30 shadow-lg shadow-accent/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Disponível para novos desafios
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              className="block"
            >
              Desenvolvedor
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="block"
            >
              Full Stack
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Construo produtos rápidos, bonitos e escaláveis.
          </motion.p>

          <motion.div
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="space-y-4 pt-2"
          >
            {/* Botões de texto */}
            <div className="flex flex-wrap items-center gap-3">
              <RippleButton href="#projetos" variant="primary" className="min-w-[140px] h-12">
                Ver projetos
              </RippleButton>
              <RippleButton href="#contato" variant="primary" className="min-w-[140px] h-12">
                Contato
              </RippleButton>
              <RippleButton href="https://wa.me/5514991935486?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto." variant="primary" className="min-w-[140px] h-12">
                WhatsApp
              </RippleButton>
            </div>
            
            {/* Ícones sociais */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/lucaaslimadev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-lima-789970372/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lucaaslima_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 text-white/50 flex items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
            <span>Role para ver os projetos</span>
          </motion.div>
        </div>

        <motion.div
          ref={imgCardRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          whileHover={{ scale: 1.03, z: 20 }}
          style={{ y }}
          className="relative mx-auto md:mx-0 w-80 h-80 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-full overflow-hidden flex items-center justify-center group aspect-square"
        >
          {/* Moldura circular externa */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-navy-700/50 via-navy-800/40 to-navy-900/50 backdrop-blur-sm border-2 border-white/15 shadow-2xl shadow-accent/20" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent/15 via-purple-500/10 to-transparent" />
          
          {/* Container interno circular */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-navy-800/20 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent" />
            
            {/* Borda interna circular */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 shadow-inner" />
            
            {/* Glow circular */}
            <div className="absolute -inset-[4%] -z-10 rounded-full bg-gradient-to-tr from-accent/20 via-purple-500/12 to-transparent blur-2xl opacity-60 group-hover:opacity-85 transition-opacity" />
            
            <Image
              src={imgSrc}
              alt="Lucas Lima - Foto de perfil"
              fill
              sizes="(min-width: 1280px) 36rem, (min-width: 768px) 32rem, 20rem"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06] rounded-full scale-[1.15]"
              placeholder="blur"
              blurDataURL={profileBlurDataUrl}
              quality={95}
              priority
              onError={onImgError}
            />
            
            {/* Anel decorativo interno circular */}
            <div className="pointer-events-none absolute inset-2 rounded-full ring-2 ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

