"use client";
import React, { useState } from "react";

const Faq = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <section className="bg-gray-50 py-10 mb-10 h-full">
        <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto text-sm font-semibold  mb-10">
            <h2 className="text-center border-b-2 border-gray-200 py-6 text-gray-900 text-3xl sm:text-4xl tracking-tight font-bold">Frequently asked questions</h2>
          {questions.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-6 text-lg">
              <button onClick={() => handleToggle(index)} className="flex justify-between w-full ">
                <p className="font-medium text-gray-900 mb-3">{faq.question}</p>
                {activeIndex === index ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                )}
              </button>
              {activeIndex === index && (
            <p className="text-base text-gray-500">{faq.answer}</p>
          )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
