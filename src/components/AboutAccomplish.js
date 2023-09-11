import React from "react";
import { accomplishments } from "@/data/accomplishments";
const AboutAccomplish = () => {
  return (
    <>
      <section className="bg-white mt-[-5vw] pt-20 pb-28">
        <div className="w-[90%] mx-auto max-w-7xl">
          <p className="font-mono uppercase text-lg text-indigo-500 tracking-tight mt-2">
            Things_we_are_proud_of
          </p>
          <h3 className="text-2xl md:text-3xl tracking-tight text-black font-bold">
            Accomplishments
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-8 gap-4 md:gap-10 gap-y-2 overflow-hidden">
            {accomplishments.map((accomplishment) => (
              <>
                
                <div key={accomplishment.id} className="flex flex-col">
                    <div className="flex items-center text-indigo-500 mb-6">
                    <svg viewBox="0 0 4 4" class="mr-1 h-2 w-2 flex-none"><circle cx="2" cy="2" r="2" fill="currentColor"></circle></svg>
                    <div class="absolute h-px w-screen -translate-x-full lg:bg-gray-900/10 lg:static lg:-mr-6 lg:w-auto lg:flex-auto lg:translate-x-0"></div>
                </div>
                  <h3 className="text-lg tracking-tight text-gray-900 font-semibold leading-8">
                    {accomplishment.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-7 mt-3">
                    {accomplishment.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAccomplish;
