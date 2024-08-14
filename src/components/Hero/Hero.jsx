import React from "react";
import Banana from "../../assets/food/banana2.png";
import Foodpng from "../../assets/food/food.png";
import Leaf from "../../assets/food/leaf.png";
import Spoon from "../../assets/food/spoon.png";
import { IoCartOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/*text content */}
          <div className="space-y-3 mt-14 
          text-center md:text-left 
          md:mt-0">
            <h1 className="relative text-5xl lg:text-7xl 
            xl:text-8xl font-bold uppercase text-outline
            text-transparent">
              YUMMY 
              <img src={Leaf}
              alt="" 
              className="absolute w-[50px] top-0 right-0"
              />
            </h1>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">
            Breakfast
            </h1>
            <p className="text-sm">
            I usually try to cook breakfast at home, 
            but if I'm on the road and hunger strikes.
            </p>
            <button className="btn-primary inline-block !mt-10">
              <IoCartOutline className="inline mr-2" />
              Order Now
            </button>
          </div>
          {/*Image here */} 
          <div>
            <img src={Foodpng} alt="" className="w-[450] img-shadow"/>
            <img src={Spoon} alt="" className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"/>
            <img src={Banana} alt="" className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
