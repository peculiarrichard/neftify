"use client";
import React, { useState } from "react";
import Image from "next/image";
import modal from "/public/modal.png";
const Studio = () => {
  const [active, setActive] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClickItem = () => {
    setClicked(!clicked);
  }

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <section className="pb-32 mt-[-5vw] bg-[#0D2138] rounded-[60px] rounded-tl-none rounded-tr-none pt-32 md:pt-40">
        <div className="flex flex-col justify-center w-[90%] mx-auto">
          <div className="flex flex-col space-y-6 md:w-[45%]">
            <p
              className="text-lg text-[#FBFF39] font-mono tracking-tight uppercase"
              data-aos="fade-up">
              Your_Brand_Your_Way
            </p>
            <h2
              className="text-3xl font-bold sm:text-4xl text-white tracking-tight"
              data-aos="fade-up">
              Ultimate control and flexibility for a painless integration
            </h2>
            <p className="text-lg text-white" data-aos="fade-up">
              Use code or no-code to completely customize Neftify Connect.
              Integrate it on any framework, React, Vue, Angular, Svelte,
              JavaScript? It’s all up to you to build your ideal user flow.
            </p>
          </div>

          {/* studio starts here */}
          <div className="mt-8 bg-[#0F2945] border border-[#38476A] rounded-t-xl rounded-b-xl md:w-[80%]">
            <div className="flex gap-3 p-5 border-b border-[#38476A] mb-6">
              <button onClick={handleClick}>
                {active ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="white"
                    className="bi bi-x"
                    viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    className="bi bi-list"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                )}
              </button>
              <p className="text-slate-500 font-bold">Connect Studio</p>
            </div>
            <div className="flex justify-center relative ">
              {active ? (
                <div className="-mt-[1.5vw] w-[180px] flex flex-col absolute top-0 left-0 z-10 h-max overflow-x-hidden border-r border-[#38476A] transition-all space-y-6 md:relative bg-[#0d2138]">
                  <div className="flex justify-between text-slate-400 font-bold p-2 border-b border-[#38476A]">
                      <p className="text-sm sm:text-lg">Header</p>
                    
                    <button onClick={handleClickItem}>
                    {clicked ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    )}
                     </button>
                  </div>
                  <div className="flex justify-between text-slate-400 font-bold p-2 border-b border-[#38476A]">
                      <p className="text-sm sm:text-lg">Modal</p>
                    
                    <button onClick={handleClickItem}>
                    {clicked ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    )}
                     </button>
                  </div>
                  <div className="flex justify-between text-slate-400 font-bold p-2 border-b border-[#38476A]">
                      <p className="text-sm sm:text-lg">Provider</p>
                    
                    <button onClick={handleClickItem}>
                    {clicked ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    )}
                     </button>
                  </div>
                </div>
              ) : null}
              <div className="bg-[#0d2138] m-3 rounded-xl border border-[#38476A] flex-1 overflow-hidden">
                <Image src={modal} alt='modal' className="md:w-[40%] m-auto"></Image>
              </div>
            </div>

            <div className="flex gap-3 p-5 border-t border-[#38476A] mt-6">
              <p className="text-slate-500">
                You can customize Neftify Connect via the Connect Studio or with
                custom CSS properties within your stylesheet to customize font,
                color, spacing, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
