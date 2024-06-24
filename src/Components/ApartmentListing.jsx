

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../util/cn";
import { DirectionAwareHover } from "../Components/direction-aware-hover";
import imageUrl8 from "../assets/ast8.png";
import imageUrl9 from "../assets/ast9.png";
import imageUrl10 from "../assets/ast10.png";
import imageUrl11 from "../assets/ast11.png";
import imageUrl12 from "../assets/ast12.png";
import imageUrl13 from "../assets/ast13.png";
export function ApartmentListing() {
  
    
  return (
    <div className=" items-center justify-center flex flex-col">
      <div className="flex flex-row p-2 gap-2">
        <div className="h-[40rem] relative  flex items-center justify-center">
          <div className="p-2 border border-2   hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
            <DirectionAwareHover imageUrl={imageUrl8}>
              <p className="font-bold text-xl">In the mountains</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>
        </div>
        <div className="h-[40rem] relative  flex items-center justify-center">
          <div className="p-2 border border-2   hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
            <DirectionAwareHover imageUrl={imageUrl9}>
              <p className="font-bold text-xl">In the mountains</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>
        </div>
        <div className="h-[40rem] relative  flex items-center justify-center">
          <div className="p-2 border border-2   hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
            <DirectionAwareHover imageUrl={imageUrl10}>
              <p className="font-bold text-xl">In the mountains</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default ApartmentListing;


