"use client";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./constants";

export default function Home() {
  return (
    <>
      <main className="flex relative flex-col bg-black-100  overflow-hidden mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
