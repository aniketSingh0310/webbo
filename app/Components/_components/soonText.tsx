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
  weight: [ "400","600"],
});

const SoonText = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-[200px] relative flex justify-center items-center">
        <p
          className={cn(
            "text-[200px] text-white/20 font-medium absolute whitespace-nowrap stroke",
            poppins.className
          )}
        >
          COMING SOON
        </p>
        <p className={cn("text-white/70 text-[80px] font-semibold absolute tracking-wider",anton.className)}>
          COMING SOON
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-full"> 
        <p className={cn("text-[20px] text-white",poppins.className)}>Subscribe to our mailing list to get latest updates</p>
        <Mailer/>
      </div>
    </div>
  );
};

export default SoonText;
