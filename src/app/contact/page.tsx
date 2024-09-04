'use client'
import React, { useState } from "react";
import Image from "next/image";
import Input from "../components/Input/input";
import logo from './../assets/image/Oasis Final Logo.png'
import Select from "../components/Input/select";
import { isEmail, isEmpty, isValidPhoneNumber, isValidName } from "./../utils/validation";

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interior: string;
  role: string;
  price: string;
  message: string;
}

interface Option {
  value: string;
  label: string;
}

interface ContactData {
  role: Option[];
  budget: Option[];
  interior: Option[];
}

const contactData: ContactData = {
  role: [ 
    { "value": "", "label": "Select Role*" },
    { "value": "buyer", "label": "Buyer" },
    { "value": "broker", "label": "Broker" },
  ],
  budget: [
    { "value": "", "label": "Select Your Budget*" },
    { "value": "$500K-$1M", "label": "$500K-$1M" },
    { "value": "$1M-$2M", "label": "$1M-$2M" },
    { "value": "$2M-$3M", "label": "$2M-$3M" },
    { "value": "$3M+", "label": "$3M+" }
  ],
  interior: [ 
    { "value": "", "label": "Choose Type*" },
    { "value": "studio", "label": "studio" },
    { "value": "1 Bedroom", "label": "1 Bedroom" },
    { "value": "2 Bedrooms", "label": "2 Bedrooms" },
    { "value": "3 Bedrooms", "label": "2 Bedrooms" }
  ]
};

interface InputProps {
  placeholder: string;
  onValueChange: (value: string, id: keyof FormState) => void;
  id: keyof FormState;
}

export default function Coming(): JSX.Element {
  const [forms, setForms] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    interior: "",
    role: "",
    price: "",
    message: "",
    phone: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success">("success");

  const priceOptions = contactData.budget;
  const residencesOptions = contactData.interior;
  const agentOptions = contactData.role;
  const emailTemplate =`
  <!DOCTYPE html>
  <html>
  <head>
    <title>New Contact Arrived</title>
    <style>
      a { font-style: italic; font-weight: bold; color: black !important; }
    </style>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <div style="width: 100%; max-width: 750px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; font-size: 33px; color: #333; margin-bottom:40px;">New contact arrived</div>
      <div style="background-color: #F3EBDD; border-radius: 20px; width:100%; padding: 20px">
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">First Name: ${forms.first_name}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Last Name: ${forms.last_name}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Email: ${forms.email}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Budget: ${ forms.price }</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Interior: ${ forms.interior}</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Role: ${ forms.role }</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Phone Number: ${ forms.phone }</div>
        <div style="font-size: 18px; color: #666; margin-top:5px; margin-bottom:5px;">Comment: ${forms.message}</div>
      </div>
      <div style="padding: 35px 0px; width: 100%;">
        <div style="width: 100%; max-width: 400px; margin: 0 auto;">
          <div style="font-size:14px; color: #BC9067; text-align: center"> This is newsletter from union center.</div>
        </div>
      </div>
    </div>
  </body>
  </html>
` 
const onTextAreaValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log(event)
  const target = event.target;
  const value = target.value;
  const id = target.id;
  setForms(prevForms => ({...prevForms, [id]: value }));
}
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    console.log(value)
    setForms(prevForms => ({...prevForms, [id]: value }));
  
    if (!isEmpty(value)) {
      setErrors(prevErrors => ({...prevErrors, [id]: "" }));
    }
    if (!value.trim()) {
      setErrors(prevErrors => ({...prevErrors, [id]: "This field is required." }));
    }
    if (id === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors(prevErrors => ({...prevErrors, [id]: "Input Valid Email" }));
      }
    }
  };
  const onclick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    for (let key in forms) {
      if(key === "first_name" || key === "last_name"){
        if(!isValidName(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid name" }));
        }
      }
      if(key === "email"){
        if(!isEmail(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid email" }));
        }
      }
      if(key === 'phone'){
        if(!isValidPhoneNumber(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "Input valid phone number" }));
        }
      }

      if(key === "price" || key === "interior" || key === "role" || key === "email" || key === "first_name" || key === "last_name" || key === "phone"){
        if(isEmpty(forms[key])){
          setErrors(prevErrors => ({...prevErrors, [key]: "This field is required" }));
        }
      }
    }
    const allValid = Object.values(forms).every((field) =>!isEmpty(field));
    if(allValid){
      if (Object.values(errors).every(value => isEmpty(value))) {
        try {
          const formData = new FormData();
          formData.append("from", 'onboarding@resend.dev');
          formData.append("to", 'simonxmachine@gmail.com');
          formData.append("subject", 'New Subscriber');
          formData.append("html", emailTemplate);
        
          const response = await fetch(`https://tracking-server-beta.vercel.app/api/send`, {
            method: 'POST',
            body: formData,
          });
        
          if (!response.ok) throw new Error('Network response was not ok');
          window.alert("You have been successfully subscribed.")
        } catch (error) {
          window.alert("NetWork Error")
        }
      }
    }
  }
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.id) {
      case "role":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      case "price":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      case "interior":
        setForms({...forms, [event.target.id]: event.target.value});
        break;
      default:
        return;
    }
    
    if(!isEmpty(event.target.value)){
      setErrors({ ...errors, [event.target.id]: ""})
    }
  };
  return(
    <>
      <div className="w-full bg-main-bg overflow-y-scroll lg:overflow-y-hidden">
      <div className="w-full h-[600px]" style={{ backgroundImage: "url('/img/oasis_exterior1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

      </div>
      <div className="relative h-[80px] w-full text-center items-center mb-0">
        <p className="relative text-white z-20 top-6 font-spartan sans-serif tracking-[2px]">Noble LIC 1st Place Winner <span><a className="underline cursor-pointer">2024 AIA Design Awards</a></span> </p>
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>      
      </div>
      <div className="my-16 sm:my-24 text-center">
        <p className="uppercase text-5xl font-nunito-sans text-red font-[400]">SCHEDULE VIEWING</p>
      </div>
        <div className="w-full lg:flex max-w-[1440px] mx-auto mt-12 sm:mt-24">
          <div className="w-full px-6">
            <p className="font-spartan text-lg">To learn more about our building, please register here.</p>
            <div className="my-6 flex-col">
              <a className="font-spartan text-lg relative cursor-pointer border-b-[2px] pt-12">nusunvernon@grevg.com</a>
              <p><a className="font-spartan text-sm relative cursor-pointer border-b-[2px] pt-12">(646) 970-3055</a></p>
            </div>
            <p className="font-spartan text-lg my-6">3055 Vernon Boulevard, Long Island City New York, NY 11102</p>
          </div>
          <form className="w-full">
            <div className="w-full lg:flex lg:mb-6 lg:space-x-6">
              <div className="w-full relative my-3 sm:my-3">
                <Input 
                  placeholder="First Name*"
                  onValueChange={onValueChange}
                  id={"first_name"}
                  className="w-[calc(100%-24px)] px-3"
                  name="first name"
                />
                {errors.first_name && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-4">{errors.first_name}</p>}
              </div>
              <div className="w-full relative my-3 sm:my-3">
                <Input 
                  placeholder="Last Name*"
                  onValueChange={onValueChange}
                  id={"last_name"}
                  className="w-[calc(100%-24px)] px-3"
                  name="last name"
                />
                {errors.last_name && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-4">{errors.last_name}</p>}
              </div>
            </div>
            <div className="w-full lg:my-6 space-x-3 my-3 sm:my-3 relative">
              <Input 
                placeholder="Email*"
                onValueChange={onValueChange}
                id={"email"}
                className="w-[calc(100%-24px)] px-3"
                name="email"
              />      
              {errors.email && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.email}</p>}
            </div>
            <div className="w-full lg:my-6 space-x-3 my-3 sm:my-3 relative">
              <Input 
                placeholder="Phone Number*"
                onValueChange={onValueChange}
                id={"phone"}
                className="w-[calc(100%-24px)] px-3"
                name="phone"
              />      
              {errors.phone && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.phone}</p>}
            </div>
            <div className="w-[calc(100%-24px)] lg:my-6 space-x-3 my-3 sm:my-3 relative">
              <Select 
                options={contactData.role}
                onChange={handleDropdownChange}
                id="role"
                name="Role (required)"
              />
              {errors.role && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.role}</p>}
            </div>
            <div className="w-[calc(100%-24px)] lg:my-6 space-x-3 my-3 sm:my-3 relative">
              <Select 
                options={contactData.interior}
                onChange={handleDropdownChange}
                id="interior"
                name = "Interested Size (required)"
              />
              {errors.interior && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.interior}</p>}
            </div>
            <div className="w-[calc(100%-24px)] lg:my-6 space-x-3 my-3 sm:my-3 relative">
              <Select 
                options={contactData.budget}
                onChange={handleDropdownChange}
                id="price"
                name="Price (required)"
              />
              {errors.price && <p className="float-right text-red-600 text-[12px] text-red absolute -bottom-3 left-1">{errors.price}</p>}
            </div>
            <div className="">
              <textarea 
                placeholder="Message"
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {onTextAreaValueChange(event)}}
                id={"message"}
                className="focus-visible:outline-none rounded-xl w-[calc(100%-24px)] mx-3 bg-main-bg min-h-[100px] border-[2px] p-2"
                name=""

              />
            </div>
            
            
            <div className="my-6 text-center w-full">
              <button onClick={(e) => onclick(e)} className="border-[2px] border-black hover:bg-black duration-1000 hover:text-main-bg rounded-full px-5 py-2 text-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}