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
        <div className="relative h-[80px] w-full text-center items-center mb-0">
          <p className="relative text-white z-20 top-6 font-spartan sans-serif tracking-[2px]">
            Noble LIC 1st Place Winner{" "}
            <span>
              <a className="underline cursor-pointer">2024 AIA Design Awards</a>
            </span>{" "}
          </p>
          <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>
        </div>
      </div>
      <div className="absolute top-[350px] left-0 right-0">
        <p className="font-ivy-mode text-5xl text-white text-center font-bold mx-6 sm:mx-auto">
          A COMMITMENT TO EXCELLENCE
        </p>
      </div>
      <div className="bg-page-bg">
        <div className="pt-[96px] pb-[50px]">
          <p className="font-spartan container text-center tracking-widest leading-7 font-[16px]">
            Noble LIC sets a new standard for design excellence in Long Island
            City. Every residence has high ceilings, an Electrolux Stackable
            Washer and Dryer, private outdoor space, and large European windows
            that fill the home with natural light. Each home offers keyless
            entry by Latch as well. Noble LIC is the first building in New York
            to achieve Porcelanosa Select status.
          </p>
        </div>
        <section>
          <div className="sm:flex-row flex flex-col">
            <div className="sm:basis-1/2 basis-full">
              <Image src={team1} alt="" />
            </div>
            <div className="sm:basis-1/2 basis-full p-[70px] flex justify-center flex-col items-center">
              <div>
                <h3 className="text-[#AB0535] text-[30px] uppercase mb-[20px]">
                  living room
                </h3>
                <p className="font-spartan container text-left tracking-widest leading-7 font-[16px] px-0">
                  Natural light streams into your home highlighting the beauty
                  of the Porcelanosa wide-plank Lutier Grey engineered hardwood
                  floors. Sit back and savor the stunning skyline views. The
                  energy-efficient climate control system ensures your comfort
                  year-round.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sm:flex-row-reverse flex flex-col">
            <div className="basis-1/2">
              <Image src={team2} alt="" />
            </div>
            <div className="basis-1/2 p-[70px] flex justify-center flex-col items-center">
              <div>
                <h3 className="text-[#AB0535] text-[30px] uppercase mb-[20px]">
                  Kitchen
                </h3>
                <p className="font-spartan container text-left tracking-widest leading-7 font-[16px] px-0">
                  The Porcelanosa custom kitchens feature Glem White Nature
                  porcelain slab countertops, a full-height backsplash clad in
                  Capri Bone tile, and perfectly designed chrome fixtures.
                  Custom smooth white and textured wood cabinets along with
                  underlighting provide function and contemporary elegance. All
                  two-bedroom homes and select one-bedroom homes feature
                  full-height pantries. The integrated kitchens are equipped
                  with the best appliances from Bertazzoni including panelized
                  refrigerators and dishwashers. All two-bedroom homes feature
                  peninsulas with porcelain waterfall countertops.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sm:flex-row flex flex-col">
            <div className="basis-1/2">
              <Image src={team3} alt="" />
            </div>
            <div className="basis-1/2 p-[70px] flex justify-center flex-col items-center">
              <div>
                <h3 className="text-[#AB0535] text-[30px] uppercase mb-[20px]">
                  Bedroom
                </h3>
                <p className="font-spartan container text-left tracking-widest leading-7 font-[16px] px-0">
                  The spacious bedrooms were designed with your well-being and
                  comfort in mind. Every bedroom has oversize closets, large
                  windows, and ample space for furniture and circulation, in
                  two-bedroom homes, the primary bedroom, boasts a custom
                  Porcelanosa ensuite bath.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sm:flex-row-reverse flex flex-col">
            <div className="basis-1/2">
              <Image src={team4} alt="" />
            </div>
            <div className="basis-1/2 p-[70px] flex justify-center flex-col items-center">
              <div>
                <h3 className="text-[#AB0535] text-[30px] uppercase mb-[20px]">
                  Secondary Bath
                </h3>
                <p className="font-spartan container text-left tracking-widest leading-7 font-[16px] px-0">
                  Along with radiant-heat flooring, the secondary bathroom
                  includes custom chrome fixtures and a tub-shower combination.
                  The walls and floors are clad in luxurious Porcelanosa tiles
                  from the Glem White and Vela collections. The white sink and
                  the ash-and-cherry vanity are part of the Marne collection.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sm:flex-row flex flex-col">
            <div className="basis-1/2">
              <Image src={team2} alt="" />
            </div>
            <div className="basis-1/2 p-[70px] flex justify-center flex-col items-center">
              <div>
                <h3 className="text-[#AB0535] text-[30px] uppercase mb-[20px]">
                  Primary Bath
                </h3>
                <p className="font-spartan container text-left tracking-widest leading-7 font-[16px] px-0">
                  Each two-bedroom home has a spa-style primary bath clad in
                  timeless Porcelanosa tiles from the Bottega and Adda
                  collections. The white sink and vanity are part of the Marne
                  collection. All primary bathrooms feature radiant-heat
                  flooring, custom chrome fixtures, and glass-enclosed stall
                  showers
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
