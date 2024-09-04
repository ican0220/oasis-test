"use client";

import React from "react";
import Image from "next/image";
import team1 from "./../assets/image/residences/1.png";
import team2 from "./../assets/image/residences/2.png";
import team3 from "./../assets/image/residences/3.png";
import team4 from "./../assets/image/residences/4.png";
import team5 from "./../assets/image/residences/5.png";

export default function City() {
  return (
    <>
      <div className="bg-main-bg w-full">
        <div
          className="w-full h-[600px] bg-black opacity-70"
          style={{
            backgroundImage: "url('/img/oasis_exterior1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="bg-black opacity-40 absolute top-0 left-0 right-0 h-[600px]"></div>
      </div>
      <div className="absolute top-[350px] left-0 right-0">
        <p className="font-ivy-mode text-5xl text-white text-center font-bold mx-6 sm:mx-auto">
          A COMMITMENT TO EXCELLENCE
        </p>
      </div>
      <div className="bg-page-bg p-[50px]">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col sm:flex-row">
            <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
              <label className="uppercase">first name</label>
              <input type="text" className="bg-page-bg border border-black" />
            </div>
            <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
              <label className="uppercase">last name</label>
              <input type="text" className="bg-page-bg border border-black" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
              <label className="uppercase">email address</label>
              <input type="text" className="bg-page-bg border border-black" />
            </div>
            <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
              <label className="uppercase">phone number</label>
              <input type="text" className="bg-page-bg border border-black" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
              <label className="uppercase">address</label>
              <input type="text" className="bg-page-bg border border-black" />
            </div>
            <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
              <label className="uppercase">zip</label>
              <input type="number" className="bg-page-bg border border-black" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
              <label className="uppercase">city</label>
              <input type="text" className="bg-page-bg border border-black" />
            </div>
            <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
              <label className="uppercase">country</label>
              <input type="number" className="bg-page-bg border border-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
