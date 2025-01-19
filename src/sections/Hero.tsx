import { FC } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import heroImage from "@/assets/images/hero-image.jpg";

const Hero: FC = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="container !max-w-full md:col-span-7 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40">
            Crafting digital experiences through code and creative design
          </h1>
          <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-8">
            <Button varient="secondary" iconAfter={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            }>
              <span>View My Work</span>
            </Button>
            <Button className="font-bold animate-bounce" varient="text">Let&apos;s Talk</Button>
          </div>
        </div>
        <div className="mt-20 md:col-span-5">
          <Image className="size-full object-cover md:rounded-l-xl" src={heroImage} alt="My Portrait" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
