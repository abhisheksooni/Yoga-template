import React from "react";
import Nav from "../Components/Nav/Nav";
import { ArrowRight } from "lucide-react";
import { home, home2 } from "../imgs/Img";

function Home() {
  return (
    <div className="">
      <Nav />
      {/* Section = 1 */}
      <section className="flex flex-wrap gap-6 mx-auto max-w-[1200px] py-12 ">
        {/* text */}
        <div className=" flex flex-col items-center mx-auto lg:items-start sm:max-w-[576px] px-3">
          <h1 className="text-[#220953] text-[46px]  px-3 font-medium text-center sm:text-[93px] md:text-left">
            Choose You Best
            <span className=" nexbg text-white inline-block rounded-xl rotate-12 ml-3 px-2 pb-2  sm:w-[238px] leading-[130%] bottom-4">
              Yoga
            </span>
            Teacher.
          </h1>
          <p className="text-sm text-[#4B3E65] mt-5 mb-8  text-center sm:text-base md:w-[417px] md:text-left">
            Calm your mind and body with the best yoga teachers available, relax
            your day and stay positive.
          </p>
          {/* <!-- button --> */}
          <button className="px-7 py-4 nexbg text-white rounded-full flex text-sm fp font-medium items-center sm:text-base">
            Get Started Free <ArrowRight />
          </button>
          {/* <!-- numbers --> */}
            <div class="flex gap-16 mt-12">
                <div class="">
                    <span class="text-[30px] fl text-[#220953] sm:text-[56px]">300+</span>
                    <p class="text-xs fp text-[#220953] sm:text-sm">yoga Class</p>
                </div>
                <div class="">
                    <span class="text-[30px] fl text-[#220953] sm:text-[56px]">45+</span>
                    <p class="text-xs fp text-[#220953] sm:text-sm">Participants</p>
                </div>
            </div>
        </div>
        {/* Images */}
        <div className="min-w-[300px] mx-auto">
          <img src={home} alt="" />
        </div>
      </section>
      {/* Section = 2 */}
      <section  className=" flex flex-wrap gap-10 justify-center  items-center max-w-[1200px] pt-20 mx-auto">
      <div class="flex items-center justify-center gap-10 sm:my-12 sm:py-12">
            <span class="text-[#220953] text-[28px] fl font-medium sm:text-[56px]">#01</span>
            <div class="w-[230px] h-[100px] rounded-full bg-[#E5D9FD] static sm:w-[400px] sm:h-[188px]">
                <img className=" relative bottom-[2.8rem] sm:left-[2.5rem] " src={home2} alt=""/>
            </div>        
        </div>       
    <div class="">
        <p class="w-[328px] text-base fp text-[#4B3E65]">Get a list of specific influencers in your niche at your fingertips so you can focus on managing your status.</p>
    </div>
    <button className="text-base font-medium flex gap-2">
        <span>Next</span>
        <ArrowRight/>
    </button>
      </section>
    </div>
  );
}

export default Home;
