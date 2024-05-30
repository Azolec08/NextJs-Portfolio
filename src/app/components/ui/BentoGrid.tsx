import { cn } from "@/app/utils/cn";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 grid-rows-2 lg:grid-cols-2 grid-cols gap-8 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-[200px] h-full w-full md:min-h-[300px] lg:min-h-[400px] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4"
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div
          className={`${titleClassName} font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2`}
        >
          {title} <br />
          <span className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </span>
        </div>
        {img && (
          <Image
            src={img}
            alt="b1"
            width={220}
            height={220}
            className={imgClassName}
          />
        )}
      </div>
    </div>
  );
};
