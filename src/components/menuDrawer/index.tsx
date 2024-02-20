import { X } from "lucide-react";
import React from "react";
import { GanttChartSquare, Images, Phone } from "lucide-react";

interface Iprops {
  isDrawerIsOpen: boolean;
  setIsDrawerIsOpen: (value: boolean) => void;
}

const MenuDrawer = (props: Iprops) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen duration-300 bg-white transition ${
        props.isDrawerIsOpen ? " translate-x-0" : " translate-x-full"
      }`}
    >
      <div className=" flex justify-between items-center p-4">
        <div className="  text-xl font-semibold cursor-pointer">
          Roak Reality
        </div>
        <X size={30} onClick={() => props.setIsDrawerIsOpen(false)} />
      </div>
      <ul className="flex flex-col items-start gap-8 text-lg font-semibold mt-6">
        <li className=" cursor-pointer px-6 flex items-center gap-4">
          <span>
            <GanttChartSquare />{" "}
          </span>{" "}
          Projects
        </li>
        <li className=" cursor-pointer px-6 flex items-center gap-4">
          {" "}
          <span>
            <Images />
          </span>{" "}
          Gallery
        </li>
        <li className=" cursor-pointer px-6 flex items-center gap-4">
          {" "}
          <span>
            <Phone />
          </span>{" "}
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default MenuDrawer;
