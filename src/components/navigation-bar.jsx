//import { useState } from "react";
//import { X, AlignJustify } from "../config";

const NavigationBar = () => {
  //const [currentNav, setCurrentNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      name="navbar"
      className="flex flex-row justify-between item-center p-4 text-white bg-black w-full h-20"
    >
      <div className="">
        <h1>Joshua Clores</h1>
      </div>
      <div>
        <ul className="">
          {links.map(({ id, link }) => (
            <li key={id} className="float-start block">
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
