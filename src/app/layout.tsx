import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnchorScrollEnhancer } from "@/components/AnchorScrollEnhancer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyCTA } from "@/components/StickyCTA";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Portfólio | Lucas Lima",
  description: "Portfólio moderno com transições, efeitos de rolagem e projetos.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Lucas Lima — Portfólio",
    description: "Front-end Engineer | Experiência moderna e animada",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>
            <ScrollProgress />
            <AnchorScrollEnhancer />
            <ScrollAnimations />
            <StickyCTA />
            <Navbar />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

