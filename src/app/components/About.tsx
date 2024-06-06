"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Introduction",
    description:
      "Hello! I'm Mark Angelo Celoza, a dedicated Front-End Developer with a strong focus on React.js. With 3 years of experience in building dynamic and responsive web applications, I thrive on transforming complex requirements into seamless, user-friendly interfaces.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/introduction.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "My Journey",
    description:
      "My journey in web development has equipped me with a solid foundation in JavaScript, HTML5, CSS3, and extensive expertise in React.js and its ecosystem. I am passionate about creating high-performance applications and continually improving my skills by staying up-to-date with the latest industry trends.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/stack2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Commitment to Quality",
    description:
      "I am committed to delivering high-quality, maintainable code and enjoy working in collaborative environments. Whether working independently or as part of a team, I strive to create web applications that not only meet but exceed user expectations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/collaborative.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Explore My Portfolio",
    description:
      "Feel free to explore my portfolio to see the projects I have worked on and the skills I bring to the table. Let's create something amazing together!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/github.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return (
    <section className="p-10 " id="about">
      <span className="py-10 w-full font-semibold text-lg md:text-3xl flex justify-center">
        About Me
      </span>
      <div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
