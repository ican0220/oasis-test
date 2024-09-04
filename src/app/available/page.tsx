"use client";
import React, {useState, useEffect} from "react";
import {toast} from 'react-toastify';

interface Room {
  id: number,
  residence: string;
  bed_bath: string;
  ext_sf: string;
  int_sf: string;
  price: string;
  est_cc: string;
  est_ret: string;
}

const TABLE_HEAD: String[] = [
  "Residence",
  "BED/BATH",
  "INT.SF",
  "EXT.SF",
  "PRICE",
  "EST.CC",
  "EST.RET",
];

 const  Available = ()=> {
 
  const [rooms, setRooms] = useState<Array<Room>| null>();
  const [filter_bedroom, setFilterBedroom] = useState<number |undefined>();
  const [filter_price, setFilterPrice] = useState<number |undefined>();
  const getRoomData = async() => {
    try{
      let response = await fetch("/api/rooms/getAll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({bedroom: filter_bedroom, price: filter_price})
      });
      let res = await response.json();
      if(res.status == 200){
        setRooms(res.res)
      }else toast.error('Internal Server Error.', {autoClose: 3000});
    }catch(err){
      toast.error(JSON.stringify(err), {autoClose: 3000});
    }
  }
  useEffect(() => {
    getRoomData();
  }, [filter_bedroom, filter_price]);
  return (
    <>
      <div className="bg-orange-50 w-full">
        {/* <div className="bg-main-bg w-full">
        <div className="w-full h-[600px] bg-black opacity-70" style={{ backgroundImage: "url('/img/oasis_exterior1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="bg-black opacity-40 absolute top-0 left-0 right-0 h-[600px]">

        </div>
        <div className="relative h-[80px] w-full text-center items-center mb-0">
          <p className="relative text-white z-20 top-6 font-spartan sans-serif tracking-[2px]">Noble LIC 1st Place Winner <span><a className="underline cursor-pointer">2024 AIA Design Awards</a></span> </p>
          <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>      
        </div>
      </div>
      <div className="absolute top-[350px] left-0 right-0">
        <p className="font-ivy-mode text-5xl text-white text-center font-bold mx-6 sm:mx-auto">
          Available
        </p>
      </div> */}
        <div className="w-full max-w-[1440px] mx-auto hidden md:block px-[50px] pt-[150px] pb-[50px]">
          <div className="pb-[50px]">
            <h3 className="text-center text-[38px] uppercase">Availability</h3>
          </div>
          <div className="flex sm:flex-row flex-col pb-5 justify-around items-start">
            <div className="">
            <select className=" bg-footer-banner border border-black sm:mr-2 mr-0 p-2" onChange={e=>setFilterBedroom(parseInt(e.target.value))}>
              <option value="" disabled selected>
                Filter by bedroom
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            </div>
            <div className="">
            <select className=" bg-footer-banner border border-black sm:mr-2 ml-0 p-2" onChange={e=>setFilterPrice(parseInt(e.target.value))}>
              <option value="" disabled selected>
                Filter by Price
              </option>
              <option value="0">$600k - $800k</option>
              <option value="1">$800k - $1M</option>
              <option value="2">$1M - $1.2M</option>
              <option value="3">$1.2M+</option>
            </select>
            </div>
          </div>
          <table className="w-full min-w-max table-auto text-left text-3xl ">
            <thead>
              <tr className="border-b-2 border-b-black">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head.toString()}
                    className="border-b border-blue-gray-100 p-2 lg:w-[120px] xl:w-[160px]"
                  >
                    <p
                      color="blue-gray"
                      className="font-bold uppercase leading-none text-[16px] text-center"
                    >
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rooms&&rooms.map(
                (
                  { id, residence, bed_bath, ext_sf, int_sf, price, est_cc, est_ret },
                  index
                ) => (
                  <tr
                    key={index}
                    className="h-[80px]  border-b border-b-black hover:bg-stone-400 transition"
                  >
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[30px] font-spartan font-bold">
                        {residence}
                      </p>
                    </td>
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[14px] font-spartan">
                        {bed_bath}
                      </p>
                    </td>
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[14px] font-spartan">
                        {int_sf}
                      </p>
                    </td>
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[14px] font-spartan">
                        {ext_sf}
                      </p>
                    </td>
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[14px] font-spartan">
                        {price}
                      </p>
                    </td>
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[14px] font-spartan">
                        {est_cc}
                      </p>
                    </td>
                    <td className="px-4 text-center">
                      <p className="blue-gray text-[14px] font-spartan">
                        {est_ret}
                      </p>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="px-[30px] pt-[150px] pb-[50px] block md:hidden">
          <div className="pb-[30px]">
            <h3 className="text-center text-[38px] uppercase">Availability</h3>
          </div>
          {rooms&&rooms.map((_, index) => (
            <div className="bg-main-bg p-[40px] mt-3" key={index}>
              <div className="text-[30px] font-spartan font-bold mb-3">
                {_.residence}
              </div>
              <div className="mb-2">
                {TABLE_HEAD[1].split("/")[0] +
                  _.bed_bath.split("/")[0] +
                  " / " +
                  TABLE_HEAD[1].split("/")[1] +
                  _.bed_bath.split("/")[1]}
              </div>
              <div className="mb-2">{TABLE_HEAD[2] + " - " + _.ext_sf}</div>
              <div className="mb-2">{TABLE_HEAD[3] + " - " + _.int_sf}</div>
              <div className="mb-2">{TABLE_HEAD[4] + " - " + _.price}</div>
              <div className="mb-2">{TABLE_HEAD[5] + " - " + _.est_cc}</div>
              <div className="mb-2">{TABLE_HEAD[6] + " - " + _.est_ret}</div>
              <div>
                <button className="rounded-full w-full bg-footer-banner text-white py-[10px] uppercase" >
                  View Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Available;
