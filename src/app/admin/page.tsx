"use client";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

 const Available = () =>  {
  
  const router = useRouter();
  const [rooms, setRooms] = useState<Array<Room>| null>();

  const onNewRoom = () => {
    router.push('/admin/create');
  }

  const getRoomData = async() => {
    try{
      let response = await fetch("/api/rooms/getAll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({})
      });
      let res = await response.json();
      if(res.status == 200){
        setRooms(res.res)
      }else toast.error('Internal Server Error.', {autoClose: 3000});
    }catch(err){
      toast.error(JSON.stringify(err), {autoClose: 3000});
    }
  }
  const onEdit = async(id:number) => {
    router.push('/admin/edit/' + id);
  }
  const onDel = async(id:number) => {
    try{
      let response = await fetch("/api/rooms/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({id: id})
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
  }, []);

  return (
    <>
      <div className="bg-orange-50 w-full">
        <div className="w-full max-w-[1440px] mx-auto hidden md:block px-[50px] pt-[150px] pb-[50px]">
          <div className="pb-[50px]">
            <h3 className="text-center text-[38px] uppercase">Availability</h3>
          </div>
          <div className="flex sm:flex-row flex-col pb-5 justify-end items-start">
            <button
              type="button"
              className="px-[20px] py-[5px] bg-green-800 rounded text-white"
              onClick={() => onNewRoom()}
            >
              New
            </button>
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
                <th className="border-b border-blue-gray-100 p-2 lg:w-[120px] xl:w-[160px]">
                  <p
                    color="blue-gray"
                    className="font-bold uppercase leading-none text-[16px] text-center"
                  >
                    Edit
                  </p>
                </th>
                <th className="border-b border-blue-gray-100 p-2 lg:w-[120px] xl:w-[160px]">
                  <p
                    color="blue-gray"
                    className="font-bold uppercase leading-none text-[16px] text-center"
                  >
                    Del
                  </p>
                </th>
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
                    <td className="px-4 text-center">
                      <button
                        type="button"
                        className="rounded bg-footer-banner text-white px-[20px] py-[5px] text-[12px] border hover:border-green-800"
                        onClick={() => onEdit(id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 text-center">
                      <button
                        type="button"
                        className="rounded bg-amber-900 text-white px-[20px] py-[5px] text-[12px] border hover:border-green-800"
                        onClick={() => onDel(id)}
                      >
                        Del
                      </button>
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
          <div>
            <button
              type="button"
              className="px-[20px] py-[5px] bg-green-800 rounded text-white"
              onClick={() => onNewRoom()}
            >
              New
            </button>
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
              <div className="flex justify-between items-center mb-3">
                <button
                  type="button"
                  className="rounded-full bg-footer-banner text-white px-[20px] py-[5px] text-[12px] border hover:border-green-800 basis-1/2"
                  onClick={() => onEdit(_.id)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="rounded-full bg-amber-900 text-white px-[20px] py-[5px] text-[12px] border hover:border-green-800 basis-1/2"
                  onClick={() => onDel(_.id)}
                >
                  Del
                </button>
              </div>
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