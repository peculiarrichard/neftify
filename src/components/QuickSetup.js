"use client";
import React, { useState } from "react";
import Image from "next/image";
import step1 from "/public/step1.png";
import step2 from "/public/step2.png";
import step3 from "/public/step3.png";

const QuickSetup = () => {
   let imageA = step1;
  let imageB = step2;
  let imageC = step3;
  
    const [selectedItem, setSelectedItem] = useState({image: imageA, text: "Create an account to start using any of Neftify services"});

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

 

  return (
    <>
      <section className="bg-blue-50 pt-20">
        <div className="w-[90%] mx-auto flex flex-col ">
          <div className="flex flex-col space-y-6 md:w-[40%]">
            <p className="text-lg text-indigo-500 font-mono tracking-tight" data-aos ="fade-up">
              QUICK_SETUP
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 tracking-tight" data-aos ="fade-up">
              Start Connecting in 3 simple steps.
            </h2>
            <p className="text-lg text-slate-500" data-aos ="fade-up">
              Using Neftify Connect is easy, just create an account, customize
              and add to your website.
            </p>
          </div>
          <div className="flex flex-col justify-between md:flex-row space-y-4 mt-10 md:items-start">
            <div className=" h-full flex md:flex-col border-2 rounded-full md:border-none md:rounded-none space-y-4 space-x-2 justify-center items-center md:items-start md:justify-start px-4 py-2">
              <button
                className={`flex gap-4 items-center px-2 py-2 md:py-8 md:pl-3 hover:bg-slate-50 ${
                  selectedItem &&
                  selectedItem.text ===
                    "Create an account to start using any of Neftify services"
                    ? " rounded-full md:rounded-2xl shadow-sm bg-white border-2 border-indigo-500 hover:bg-white"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick({
                    image: imageA,
                    text: "Create an account to start using any of Neftify services",
                  })
                }>
                <p className="hidden md:flex py-1 px-2 border-2 border-indigo-500 rounded-full ">
                  01
                </p>
                <div className="flex flex-col items-start ">
                  <p
                    className={`md:uppercase text-sm font-medium ${
                      selectedItem &&
                      selectedItem.text ===
                        "Create an account to start using any of Neftify services"
                        ? "text-indigo-500"
                        : ""
                    }`}>
                    Create Account
                  </p>
                  <p className=" text-left text-sm text-slate-500 font-medium w-[80%] hidden md:flex">
                    Create an account to start using any of Neftify services
                  </p>
                </div>
              </button>
              <button
                className={`flex gap-4 items-center px-2 py-2 md:py-8 md:pl-3 hover:bg-slate-50 ${
                  selectedItem &&
                  selectedItem.text ===
                    "From Neftify's dashboard, modify the Connect experience. From colors and fonts, to themes, and whitelabelling."
                    ? " rounded-full md:rounded-lg shadow-sm bg-white border-2 border-indigo-500 hover:bg-white"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick({
                    image: imageB,
                    text: "From Neftify's dashboard, modify the Connect experience. From colors and fonts, to themes, and whitelabelling.",
                  })
                }>
                <p className="hidden md:flex py-1 px-2 border-2 border-indigo-500 rounded-full ">
                  02
                </p>
                <div className="flex flex-col items-start ">
                  <p
                    className={`md:uppercase text-sm font-medium ${
                      selectedItem &&
                      selectedItem.text ===
                        "From Neftify's dashboard, modify the Connect experience. From colors and fonts, to themes, and whitelabelling."
                        ? "text-indigo-500"
                        : ""
                    }`}>
                    Customize your experience
                  </p>
                  <p className=" text-left text-sm text-slate-500 font-medium w-[80%] hidden md:flex">
                    From Neftify's dashboard, modify the Connect experience.
                    From colors and fonts, to themes, and whitelabelling.
                  </p>
                </div>
              </button>
              <button
                className={`flex gap-4 items-center px-2 py-2 md:py-8 md:pl-3 hover:bg-slate-50 ${
                  selectedItem &&
                  selectedItem.text ===
                    "Integrate the customized Connect Modal in your website."
                    ? " rounded-full md:rounded-lg shadow-sm border-2 border-indigo-500 bg-white hover:bg-white"
                    : ""
                }`}
                onClick={() =>
                  handleButtonClick({
                    image: imageC,
                    text: "Integrate the customized Connect Modal in your website.",
                  })
                }>
                <p className="hidden md:flex py-1 px-2 border-2 border-indigo-500 rounded-full ">
                  03
                </p>
                <div className="flex flex-col items-start ">
                  <p
                    className={`md:uppercase text-sm font-medium ${
                      selectedItem &&
                      selectedItem.text ===
                        "Integrate the customized Connect Modal in your website."
                        ? "text-indigo-500"
                        : ""
                    }`}>
                    Add to your site
                  </p>
                  <p className=" text-left text-sm text-slate-500 font-medium w-[80%] hidden md:flex">
                    Integrate the customized Connect Modal in your website.
                  </p>
                </div>
              </button>
            </div>
            {selectedItem && (
              <div className="flex flex-col space-y-4">
                <p className="md:hidden text-left text-ss text-slate-500 font-medium">
                  {selectedItem.text}
                </p>
                <Image src={selectedItem.image} alt="selected image"></Image>
              </div>
            )}
          </div>
        </div>
        <div className="header">
        </div>
      </section>
    </>
  );
};

export default QuickSetup;
