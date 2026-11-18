import React from "react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import Filters from "./Fliters";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `font-medium transition ${
      isActive ? "text-orange-400" : "hover:text-orange-400"
    }`;

  return (
    <nav className="bg-[#131921] text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold cursor-pointer">
        amazon<span className="text-orange-400">.</span>
      </h1>
         {/* SearchBOx */}
        {/* <Filters/> */}
      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 font-medium transition ${
              isActive ? "text-orange-400" : "hover:text-orange-400"
            }`
          }
          to="/main"
          end
        >
          Home
        </NavLink>

        <NavLink className={navClass} to="/main/shop">
          Shop
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 font-medium transition ${
              isActive ? "text-orange-400" : "hover:text-orange-400"
            }`
          }
          to="/main/cart"
        >
          <ShoppingCart size={21} />
          Cart
        </NavLink>

        <button className="bg-[#febd69] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#f3a847] transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
