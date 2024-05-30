"use client";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./components/ui/MagicButton";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";
import { Boxes } from "./components/ui/background-boxes";

const NotFound = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col gap-y-8 items-center justify-center rounded-lg">
      <Boxes />
      <TextGenerateEffect
        words="Sorry, Something went wrong"
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
      <Link href="/">
        <MagicButton
          title="Go back to homepage"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
};

export default NotFound;
