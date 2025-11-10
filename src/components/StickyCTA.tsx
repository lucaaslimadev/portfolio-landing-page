'use client';

export function StickyCTA() {
  const wa = "https://wa.me/5514991935486?text=Oi%2C%20Lucas!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";
  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[55] inline-flex md:hidden items-center justify-center h-12 w-12 rounded-full bg-accent text-navy-900 font-medium shadow-glow"
      >
        W
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[55] hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-navy-900 font-medium shadow-glow"
      >
        Falar no WhatsApp
      </a>
    </>
  );
}


