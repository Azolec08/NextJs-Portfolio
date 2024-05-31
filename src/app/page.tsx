"use client";
import Grid from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./constants";

export default function Home() {
  return (
    <>
      <main className="flex relative flex-col bg-black-100  overflow-hidden mx-auto">
        <FloatingNav navItems={navItems} />
        <div className="w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Experience />
          <Projects />
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
}
