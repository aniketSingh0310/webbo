"use client";
import React from "react";
import Logo from "./logo";
import SoonText from "../_components/soonText";
import Image from "next/image";
import Socials from "../_components/socials";
import ShootingStars from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import MoonShip from "../_components/moonShip";

const Soon = () => {
  return (
    <div className="flex flex-col md:w-[100vw] h-[100vh] w-full bg-neutral-900">
      <div className="flex w-full py-4 px-2 md:px-5 justify-start items-center">
        <Logo />
      </div>
      <div className="flex justify-center items-center">
        <SoonText />
      </div>
      {/* <div className="flex-grow flex justify-center items-end">
        <MoonShip />
      </div> */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Soon;
