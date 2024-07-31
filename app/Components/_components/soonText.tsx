import cn from "classnames";
import { Montserrat, Poppins } from "next/font/google";
import React from "react";
import Mailer from "./mailer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const anton = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const SoonText = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Dekstop */}
      <div className="md:flex hidden justify-center items-center">
        <div className="w-full relative flex justify-center items-center overflow-hidden">
          <p
            className={cn(
               "lg:text-[9em] xl:text-[13.2vw] text-white/20 font-medium stroke text-center tracking-wider whitespace-nowrap",
              poppins.className
            )}
          >
            COMING SOON
          </p>
        </div>
        <p
          className={cn(
            "text-white/70 text-[65px] font-semibold absolute tracking-widest",
            anton.className
          )}
        >
          COMING SOON
        </p>
      </div>

      {/* Mobile */}
      <div className="py-10 md:hidden">
        <p
          className={cn(
            "text-[52px] text-white/20 font-medium stroke text-center tracking-wider whitespace-nowrap overflow-hidden",
            poppins.className
          )}
        >
          COMING SOON
        </p>
        <p
          className={cn(
            "text-white/70 text-[30px] -mt-[60px] font-semibold absolute tracking-widest text-center w-full",
            anton.className
          )}
        >
          COMING SOON
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-[90%] md:w-full px-5 md:px-0 space-y-8 md:space-y-0">
        <p className={cn("text-[16px] text-white", poppins.className)}>
          Subscribe to our mailing list to get latest updates
        </p>
        <Mailer />
      </div>
    </div>
  );
};

export default SoonText;
