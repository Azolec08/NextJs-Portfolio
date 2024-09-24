import Image from "next/image";
import Link from "next/link";
import { projects } from "../constants";
import { PinContainer } from "./ui/3d-pin";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[3000px] md:min-h-[1800px] lg:min-h-[1400px]  container"
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        <TextGenerateEffect
          words="Small Selection For Projects"
          className="text-center text-[40px] md:text-5xl lg:text-6xl py-2"
        />
        <div className="flex h-full items-center justify-center flex-wrap gap-2 max-w-full">
          {projects.map((data) => {
            return (
              <PinContainer
                title={data.title}
                href={data.href}
                description={data.description}
                img={data.img}
                key={data.id}
              >
                <Link href={data.href} target="_blank">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {data.title}
                    </h3>
                    <div className="text-base font-normal">
                      <span className="text-slate-500 ">
                        {data.description}
                      </span>
                    </div>
                    <div className="flex relative flex-1 w-full rounded-lg mt-5 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                      <Image src={data.img} alt="project image" fill />
                    </div>
                  </div>
                </Link>
              </PinContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
