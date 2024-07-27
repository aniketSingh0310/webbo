import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mailer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (email) {
      toast.success("Subscription successful!");
      setEmail("");
    } else {
      toast.error("Please enter an email address.");
    }
  };

  return (
    <div className="flex w-full items-center justify-center gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row relative gap-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address"
            className="block w-full rounded-2xl border border-white/40 bg-transparent py-2 pl-6 pr-20 text-base/6 text-white/80 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-neutral-950/5"
          />
        </div>
        <div className="mt-[6px]">
          <button
            type="submit"
            aria-label="Submit"
            className="cursor-pointer text-white font-bold relative text-[14px] px-3 py-1 text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% rounded-[25px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[25px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
          >
            Subscribe
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Mailer;
