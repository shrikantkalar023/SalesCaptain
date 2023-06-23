"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const collapsibles = document.querySelectorAll<HTMLElement>(".collapsible");
    collapsibles.forEach((item) =>
      item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
      })
    );
  }, []);
  return (
    <nav className="collapsible fixed left-0 right-0 top-0 flex flex-wrap justify-between bg-white shadow shadow-slate-100">
      <div className="px-3 py-5">
        <a href="/">
          <img
            className="h-5 "
            src="/logo_normal.webp"
            alt="Sales Captain logo"
          />
        </a>
      </div>
      <div className="nav__toggler px-4 py-5" onClick={onClick}>
        <AiOutlineMenu color={clicked ? "white" : "black"} size={"1.2rem"} />
      </div>
      <div className="collapsible__content h-screen w-full bg-slate-100">
        <ul className="px-3 py-16 font-bold">
          <li className="p-4">
            <a href="#">Products</a>
          </li>
          <li className="p-4">
            <a href="#">Solutions</a>
          </li>
          <li className="p-4">
            <a href="#">Pricing</a>
          </li>
          <li className="p-4">
            <a href="#">Resources</a>
          </li>
          <li className="p-4">
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
