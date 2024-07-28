import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { MacbookScroll } from "./ui/mcbook-scroll";

export function Experience() {
  return (
    <section id="experience ">
      <div className="overflow-hidden  dark:bg-black-100 rounded-xl bg-white w-full h-auto md:h-[100vh] lg:h-auto">
        <MacbookScroll
          title={<span>My Work Experience</span>}
          src={`/linear.webp`}
          showGradient={false}
        />
      </div>
      <div className="flex w-full container flex-col lg:flex-row items-center px-0  ">
        <CardContainer className="inter-var p-4 lg:p-2">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Dianoia Tech
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              DianoiaTech is a startup IT solutions company that offers web
              development, mobile development, and cloud development services.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/crop-tech-2.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.dianoiatech.com"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Website
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <div className="lg:h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
