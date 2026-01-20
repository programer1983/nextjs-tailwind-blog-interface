import React from "react";

const MobileMenu = ({ mobilemenu }) => {
  return (
    <div
      className={`min-h-[300px] fixed top-[80px] w-full z-30  bg-white dark:bg-[#141624]  duration-300 ${
        mobilemenu ? "translate-y-[0]" : "translate-y-[-100%]"
      }`}
    >
      <div className="flex justify-center items-center pt-[30px]">
        <nav>
          <ul className="flex flex-col items-center gap-y-[18px]">
            <li className="text-[20px] font-medium">Hi, Dimon</li>
            <li className="text-[20px] font-medium">Logout</li>
            <li className="text-[20px] font-medium">Logitn</li>
            <li className="text-[20px] font-medium">Register</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
