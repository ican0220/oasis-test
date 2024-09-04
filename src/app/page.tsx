'use client'
import Image from "next/image";
import Banner from './assets/image/oasis_exterior1.jpeg';
import Banner2 from './assets/image/oasis_exterior2.jpeg';
import foot from './assets/image/items/foot.png';
import bike from './assets/image/items/bike.png';
import blue from './assets/image/items/blue.png';
import car from './assets/image/items/car.png';
import window from './assets/image/items/window.png';
import fitness from './assets/image/items/fitness.png';
import meeting from './assets/image/items/meeting.png';
import beach from './assets/image/items/beach.png';
import mfc from './assets/image/items/mfc.png';
import security from './assets/image/items/security-camera.png';
import CustomCarousel from "./components/Carousel";
import CustomVideo from "./components/CustomVideo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center -z-30">
      <div className="w-full fixed top-[100px] h-[calc(100vh-80px)] -z-[50]" 
        style={{ backgroundImage : "url('/img/oasis_exterior1.jpeg')", 
        backgroundSize: 'cover', 
        backgroundPosition : 'center' }}>
        
      </div>
      <div className="h-[calc(100vh-80px)] w-[full]">
      </div>
      <div className="relative h-[80px] w-full text-center items-center mb-0">
        <p className="relative text-white z-20 top-6 font-spartan sans-serif tracking-[2px]">Everything You Need. All Right Here at Oasis.  <span><a className="underline cursor-pointer"> </a></span> </p>
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>      
      </div>
      <div className="relative w-full flex lg:py-24 bg-page-bg mt-0">
        <div className="max-w-[1280px] mt-6 mx-auto sm:mx-auto">
          <div className="w-full mt-6 lg:flex mb-10">
            <div className="w-full ">
             <CustomCarousel/>
            </div>
            <div className="w-full px-6 lg:pl-24">
              <p className="uppercase text-4xl font-bold tracking-wide font-ivy-mode mb-6 mt-12 lg:mt-0 text-center sm:text-left">A COLLECTION OF 52 LUXURY CONDOMINIUM HOMES IN THE HEART OF ASTORIA.</p>
              <p className="text-xl font-spartan my-6 text-justify ">Oasis Residences shows great design and expert craftsmanship. Each apartment boasts soaring ceilings, oversized floor-to-ceiling windows, beautiful wide plankengineered oak wood floors, and open layouts. They offer flexibility for residents to enjoy any occasion. Many homes also include private outdoor spaces with stunning views. </p>
              <p className="text-xl font-spartan my-6 text-justify">These airy interiors are beautifully defined by the warm tones of natural wood and the elegance of sleek stones, creating a refreshing interplay of light with premium materials throughout.</p>
            </div>
          </div>

          <div className="text-center mt-16 mb-12 text-4xl font-ivy-mode">
           <CustomVideo />
          </div>
          <div className="text-center px-2 mt-20 mb-12 font-semibold tracking-wide text-4xl font-ivy-mode">
          ELEVATED AMENITIES
          </div>
          <p className="text-center text-lg font-spartan px-6">Complementing the exquisite interiors, residents at Oasis enjoy a curated selection of amenities designed to elevate everyday life with style and comfort.</p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-4">
          <div className="text-center my-6">
              <Image alt="" src={fitness} width={100} className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">FITNESS CENTER</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">Oasis`s modern fitness center boasts stunning views of the Manhattan skyline, offering a serene yet invigorating workout environment.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={bike} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">BICYCLE STORAGE</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">Being situated just blocks from parks and restaurants, with convenient access to the 59th Street Bridge, Oasis`s bicycle room is the perfect hub for urban cycling enthusiasts.</p>
            </div>
          <div className="text-center my-6">
            <Image alt="" src={car} width={100} className="mx-auto"/>
            <p className="text-red text-xl my-6 font-ivy-mode font-semibold">INDOOR PARKING</p>
            <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">Tired of searching for street parking? You can rent an indoor parking space in Oasis`s onsite garage.</p>
          </div>
          <div className="text-center my-6">
              <Image alt="" src={beach} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">ROOFTOP TERRACE</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">The rooftop terrace at Oasis offers residents a perfect space for outdoor dining and entertaining against stunning views.</p>
            </div>
    
            <div className="text-center my-6">
              <Image alt="" src={window} width={100}  className="mx-auto p-4"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">DOUBLE-PANED WINDOWS</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">The energy-efficient double-paned windows at Oasis provide superior insulation and comfort, minimizing heat transfer and enhancing the building`s overall energy performance.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={security} width={100} className="mx-auto p-4"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">24-HOUR CAMERA SECURITY</p>
              <p className="text-lg font-spartan text-[14px] px-3 pb-12 sm:px-0">The 24-hour camera security system at Oasis offers comprehensive surveillance and monitoring, ensuring peace of mind with real-time alerts.</p>
            </div>
</div>



          {/* <div className="w-full sm:flex mt-12 sm:space-x-16">
            <div className="text-center my-6">
              <Image alt="" src={fitness} width={100} className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">FITNESS CENTER</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">Oasis`s modern fitness center boasts stunning views of the Manhattan skyline, offering a serene yet invigorating workout environment.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={bike} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">BICYCLE STORAGE</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">Being situated just blocks from parks and restaurants, with convenient access to the 59th Street Bridge, Oasis's bicycle room is the perfect hub for urban cycling enthusiasts.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={car} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">INDOOR PARKING</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">Tired of searching for street parking? You can rent an indoor parking space in Oasis`s onsite garage.</p>
            </div>
          </div>
          
          <div className="w-full sm:flex sm:mt-12 sm:space-x-16">
          <div className="text-center my-6">
              <Image alt="" src={beach} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">ROOFTOP TERRACE</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">The rooftop terrace at Oasis offers residents a perfect space for outdoor dining and entertaining against stunning views.</p>
            </div>
    
            <div className="text-center my-6">
              <Image alt="" src={fitness} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">DOUBLE-PANED WINDOWS</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">The energy-efficient double-paned windows at Oasis provide superior insulation and comfort, minimizing heat transfer and enhancing the building`s overall energy performance.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={meeting} width={100} className="mx-auto"/>
              <p className="text-red text-xl my-6 font-ivy-mode font-semibold">24-HOUR CAMERA SECURITY</p>
              <p className="text-lg font-spartan text-[14px] px-3 sm:px-0">The 24-hour camera security system at Oasis offers comprehensive surveillance and monitoring, ensuring peace of mind with real-time alerts.</p>
            </div>
      
          </div> */}
        
        </div>
      </div>
    </main>
  );
}
