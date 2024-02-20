"use client";
import { GanttChartSquare, Images, Landmark, Menu, Phone } from "lucide-react";
import React, { useState } from "react";
import MenuDrawer from "../menuDrawer";

const Header = () => {
  const [isDrawerIsOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-4 border-b border-gray-400">
        <div className="flex items-center gap-3">
          <Landmark className=" h-6 w-6 md:h-10 md:w-10" />
          <div className=" hidden md:block text-3xl font-semibold cursor-pointer">
            Roak Reality
          </div>
        </div>
        <ul className=" hidden lg:flex items-center text-xl font-semibold">
          <li className=" cursor-pointer px-6 flex items-center gap-2">
            <span>
              <GanttChartSquare />{" "}
            </span>{" "}
            Projects
          </li>
          <li className=" cursor-pointer px-6 flex items-center gap-2 border-x border-black">
            {" "}
            <span>
              <Images />
            </span>{" "}
            Gallery
          </li>
          <li className=" cursor-pointer px-6 flex items-center gap-2">
            {" "}
            <span>
              <Phone />
            </span>{" "}
            Contact Us
          </li>
        </ul>
        <div className=" md:hidden text-base font-semibold">Roak Royality</div>
        <Menu
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          className=" lg:hidden"
        />
      </div>
      <MenuDrawer
        isDrawerIsOpen={isDrawerIsOpen}
        setIsDrawerIsOpen={setIsDrawerOpen}
      />
    </>
  );
};

export default Header;
