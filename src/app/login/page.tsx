"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {toast} from 'react-toastify';
import Image from "next/image";
import team1 from "./../assets/image/residences/1.png";
import team2 from "./../assets/image/residences/2.png";
import team3 from "./../assets/image/residences/3.png";
import team4 from "./../assets/image/residences/4.png";
import team5 from "./../assets/image/residences/5.png";

interface Errors{
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [pwd, setPwd] = useState<string>();
  const [errors, setErrors]= useState<Errors>();
  const onSubmit = async() => {
    console.log('ok')
    
    let newErrors = { email: '', password: ''};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!pwd) {
      newErrors.password = 'Password is required';
    } else if (pwd.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
    } else {
      // If no errors, submit form (e.g., call an API)
      try{
        let response = await fetch('/api/users/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, pwd: pwd})}
        );
        let res = await response.json();
        if(res.status == 200) {
          console.log(res, 'response')
          document.cookie = 'token=' + res.res;
          toast.success('Login Success!', { autoClose: 3000});
          router.push('/admin');
        } else toast.error('internal server error', {autoClose:3000})
      }catch(err: any){
        setErrors(err);
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
      </div>
      <div className="absolute top-[350px] left-0 right-0">
        <p className="font-ivy-mode text-5xl text-white text-center font-bold mx-6 sm:mx-auto">
          A COMMITMENT TO EXCELLENCE
        </p>
      </div>
      <div className="bg-page-bg p-[50px]">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-center text-[42px] uppercase mb-3"> Login</h1>
          <div className="flex flex-col ">
            <div className="basis-1/2 flex flex-col  pr-0 mb-5">
              <label className="uppercase">User eMail</label>
              <input
                type="text"
                className="bg-page-bg border border-black px-[10px] py-[5px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors && errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="basis-1/2 flex flex-col  pl-0 mb-5">
              <label className="uppercase">Password</label>
              <input
                type="password"
                className="bg-page-bg border border-black px-[10px] py-[5px]"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              {errors && errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full">
              <button
                type="button"
                className="border border-amber-900  bg-footer-banner w-full rounded-full py-[10px] text-white hover:text-amber-900 uppercase hover:bg-page-bg transition "
                onClick={() => onSubmit()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
