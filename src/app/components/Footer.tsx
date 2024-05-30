import { FaLocationArrow } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "../constants";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full py-10 md:py-0  h-[85vh] md:h-[60vh] lg:min-h-screen container flex flex-col justify-center">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={20}
          height={20}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">Another</span> Opportunity
          and Experience to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss if i&apos;m qualified to
          your companies expectation
        </p>
        <Link href="https://github.com/Azolec08">
          <MagicButton
            title="My Github"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-y-5 justify-between px-8 items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mark Celoza
        </p>

        <div className="flex items-center  md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
