"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Errors {
  residence: string;
  bed_room: string;
  int_sf: string;
  ext_sf: string;
  price: string;
  est_cc: string;
  est_ret: string;
}

 const RoomCreate = () => {
  const router = useRouter();
  const [residence, setResidence] = useState<string>();
  const [bed_room, setBedRoom] = useState<string>();
  const [int_sf, setIntSf] = useState<string>();
  const [ext_sf, setExtSf] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [est_cc, setEstCc] = useState<string>();
  const [est_ret, setEstRet] = useState<string>();
  const [errors, setErrors] = useState<Errors>();
  const [isProcessing, setIsProcessing] = useState(false);

  const onCreate = async () => {
    let newErrors = {
      residence: "",
      bed_room: "",
      int_sf: "",
      ext_sf: "",
      price: "",
      est_cc: "",
      est_ret: "",
    };
    if (!residence) {
      newErrors.residence = "required a residence.";
    } else if (residence.length < 2) {
      newErrors.residence = "residence must be at least 2 characters.";
    }
    const bed_room_regex = /^\d+\/\d+$/;
    if (!bed_room) {
      newErrors.bed_room = "required a bed/room.";
    } else if (!bed_room_regex.test(bed_room)) {
      newErrors.bed_room = "required exact input style.";
    }
    const num_regex = /^\d+$/;
    if (!int_sf) {
      newErrors.int_sf = "required a bed/room.";
    } else if (!num_regex.test(int_sf)) {
      newErrors.int_sf = "required exact input style.";
    }
    if (!ext_sf) {
      newErrors.ext_sf = "required a bed/room.";
    } else if (!num_regex.test(ext_sf)) {
      newErrors.ext_sf = "required exact input style.";
    }
    if (!price) {
      newErrors.price = "required a bed/room.";
    } else if (!num_regex.test(price)) {
      newErrors.price = "required exact input style.";
    }
    if (!est_cc) {
      newErrors.est_cc = "required a bed/room.";
    } else if (!num_regex.test(est_cc)) {
      newErrors.est_cc = "required exact input style.";
    }
    if (!est_ret) {
      newErrors.est_ret = "required a bed/room.";
    } else if (!num_regex.test(est_ret)) {
      newErrors.est_ret = "required exact input style.";
    }

    if (
      newErrors.residence ||
      newErrors.bed_room ||
      newErrors.int_sf ||
      newErrors.ext_sf ||
      newErrors.price ||
      newErrors.est_cc ||
      newErrors.est_ret
    ) {
      setErrors(newErrors);
    } else {
      let newRoomInfo = {
        residence: residence,
        bed_room: bed_room,
        int_sf: int_sf,
        ext_sf: ext_sf,
        price: price,
        est_cc: est_cc,
        est_ret: est_ret,
      };
      try {
        setIsProcessing(true);
        let response = await fetch("/api/rooms/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRoomInfo),
        });
        let res = await response.json();
        setIsProcessing(false);
        if (res.status == 200) {
          toast.success("Created successfully!", { autoClose: 3000 });
          router.push("/admin");
        } else toast.error("Internal server error", { autoClose: 3000 });
      } catch (err) {
        toast.error(JSON.stringify(err), { autoClose: 3000 });
      }
    }
  };
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
        <div className="bg-page-bg p-[50px]">
          <div className="max-w-[800px] mx-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
                <label className="uppercase">Residence</label>
                <input
                  type="text"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="A3"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                />
                {errors && errors.residence && (
                  <p style={{ color: "red" }}>{errors.residence}</p>
                )}
              </div>
              <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
                <label className="uppercase">Bed/Bath</label>
                <input
                  type="text"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="2/2"
                  value={bed_room}
                  onChange={(e) => setBedRoom(e.target.value)}
                />
                {errors && errors.bed_room && (
                  <p style={{ color: "red" }}>{errors.bed_room}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
                <label className="uppercase">INT.SF</label>
                <input
                  type="text"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="require a number..."
                  value={int_sf}
                  onChange={(e) => setIntSf(e.target.value)}
                />
                {errors && errors.int_sf && (
                  <p style={{ color: "red" }}>{errors.int_sf}</p>
                )}
              </div>
              <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
                <label className="uppercase">EXT.SF</label>
                <input
                  type="text"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="require a number..."
                  value={ext_sf}
                  onChange={(e) => setExtSf(e.target.value)}
                />
                {errors && errors.ext_sf && (
                  <p style={{ color: "red" }}>{errors.ext_sf}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
                <label className="uppercase">Price</label>
                <input
                  type="text"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="require a number..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors && errors.price && (
                  <p style={{ color: "red" }}>{errors.price}</p>
                )}
              </div>
              <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
                <label className="uppercase">EST.CC</label>
                <input
                  type="number"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="require a number..."
                  value={est_cc}
                  onChange={(e) => setEstCc(e.target.value)}
                />
                {errors && errors.est_cc && (
                  <p style={{ color: "red" }}>{errors.est_cc}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="basis-1/2 flex flex-col sm:pr-2 pr-0 mb-5">
                <label className="uppercase">EST.RET</label>
                <input
                  type="text"
                  className="bg-page-bg border border-black px-[10px] py-[5px] rounded"
                  placeholder="require a number..."
                  value={est_ret}
                  onChange={(e) => setEstRet(e.target.value)}
                />
                {errors && errors.est_ret && (
                  <p style={{ color: "red" }}>{errors.est_ret}</p>
                )}
              </div>
              <div className="basis-1/2 flex flex-col sm:pl-2 pl-0 mb-5">
                <label className="uppercase">submit</label>
                <button
                  type="button"
                  className="bg-green-800 border text-white hover:border-green-950 uppercase px-[10px] py-[5px] rounded"
                  onClick={() => onCreate()}
                  disabled={isProcessing?true:false}
                >
                  {isProcessing? 'Processing...': 'create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCreate;
