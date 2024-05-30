import { ContainerScroll } from "./ui/container-scroll-animation";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Your Tech Stack
                </span>
              </h1>
            </>
          }
        >
          <div className="">
            <h1 className="text-md md:text-4xl pt-8 pb-8 md:pt-10 md:pb-16 text-[#d843b3]">
              TECH STACK
            </h1>
            <ul className="grid grid-cols-3 text-sm md:text-2xl gap-y-5 w-full">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JAVASCRIPT</li>
              <li>TYPESCRIPT</li>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>TailwindCss</li>
              <li>Zustand</li>
              <li>Redux Toolkit</li>
              <li>ShadCn</li>
              <li>BootStrap</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MongoDb</li>
            </ul>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};
export default About;
