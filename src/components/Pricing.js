"use client";

import React, { useState } from "react";
import prices from "../data/prices";
import Link from "next/link";

const Pricing = () => {
  const [pricingPlan, setPricingPlan] = useState("monthly");

  const handlePriceChange = (plan) => {
    setPricingPlan(plan);
  };

  return (
    <>
      <section className="mt-14">
        <div className='w-[90%] mx-auto' data-aos='fade-up'>
      <div className="flex flex-col space-y-6 md:w-[40%]">
            <p className="text-lg text-indigo-500 font-mono tracking-tight uppercase">
              _Pricing
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 tracking-tight">
              Find the perfect plan for your team.
            </h2>

          </div>
          </div>
        <div className="flex w-[90%] mx-auto text-sm font-semibold px-2 mt-10">
          <button
            className={`${
              pricingPlan === "monthly" ? "bg-gray-900 text-white" : ""
            }
            p-2 rounded-l-full border border-gray-200 bg-gray-200`}
            onClick={() => handlePriceChange("monthly")}>
            Monthly Billing
          </button>
          <button
            className={`${
              pricingPlan === "yearly" ? "bg-gray-900 text-white" : ""
            }
            p-2 rounded-r-full border border-gray-200 bg-gray-200`}
            onClick={() => handlePriceChange("yearly")}>
            Yearly Billing
          </button>
        </div>
        <div className="mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 lg:gap-x-8 lg:gap-y-10 mt-16 mb-10 h-full">
          {prices.map((price) => (
            <div
              key={price.id}
              className={`${
                price.popular ? "border-gray-900 border-2" : "border-gray-200"
              } flex flex-col items-start gap-4 shadow-sm border  rounded-lg bg-white`}>
              {price.popular ? (
                <p className="-mt-4 mr-2 absolute bg-gray-800 text-gray-100 border-2 rounded-full py-1 text-center px-5 text-sm">
                  MOST POPULAR
                </p>
              ) : (
                ""
              )}
              <div className="p-6 border-b border-gray-200 h-full flex flex-col">
                <h2 className="text-3xl font-medium leading-6 text-gray-900">
                  {price.name}
                </h2>
                <p className="text-sm text-gray-500 mt-4 mb-8">
                  {price.description}
                </p>
                {price.enterprise ? (
                  <p className="text-sm text-gray-500">Starting at:</p>
                ) : (
                  ""
                )}
                {pricingPlan === "yearly" ? (
                  <h2 className="">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                      ${price.yearlyPrice}
                    </span>
                    <span className="text-base font-medium text-gray-500">
                      /year
                    </span>
                  </h2>
                ) : (
                  <h2 className="">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                      ${price.monthlyPrice}
                    </span>
                    <span className="text-base font-medium text-gray-500">
                      /month
                    </span>
                  </h2>
                )}
                <Link
                  href="#"
                  className="bg-gray-800 w-full justify-self-center px-3 text-sm capitalize py-2 rounded-full text-center mt-6 text-white hover:bg-gray-700">
                  Buy {price.button}
                </Link>
              </div>
              <div className="p-6 h-full">
                <p className="text-sm font-medium text-gray-500">
                  Key Features
                </p>
                <ul className="mt-6">
                  {price.features.split(".").map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 mt-4 text-sm text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#2dd4bf"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
