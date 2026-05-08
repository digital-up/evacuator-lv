import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Advantages } from "@/components/landing/advantages";
import { Services } from "@/components/landing/services";
import { Cases } from "@/components/landing/cases";
import { Testimonials } from "@/components/landing/testimonials";
import { Process } from "@/components/landing/process";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <Cases />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
