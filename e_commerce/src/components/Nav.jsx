import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useRecoilState } from "recoil";
import cartNumberAtom from "../recoil/cartNumberAtom";
import searchAtom from "../recoil/searchAtom";
import ShowSearchAtom from "../recoil/ShowSearchAtom";
import cartItemsAtom from "../recoil/cartItemsAtom";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [cartNum, setCartNum] = useRecoilState(cartNumberAtom);
  const [search, setSearch] = useRecoilState(searchAtom);
  const [showSearch, setShowSearch] = useRecoilState(ShowSearchAtom);
  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);

  const num = localStorage.getItem("cartNum");

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

  const toggleSideMenu = () => {
    setOverlay(!overlay);
    setVisible(!visible);
  };

  const closeSideMenu = () => {
    setVisible(false);
    setOverlay(false);
  };

  return (
    <>
      <div className="flex items-center justify-between py-6 font-medium">
        <Link to="/">
          <h1 className="w-36 text-4xl p-1  font-bold">
            <b>NXT BUY</b>
          </h1>
        </Link>
        <ul className="hidden sm:flex gap-[22px] text-sm text-gray-800">
          <NavLink
            to="/"
            className="flex flex-col items-center
        gap-1"
          >
            <p className="text-[18px]">Home</p>
            <hr className="w-1/2 border-none h-[2px] bg-gray-700 hidden " />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center
        gap-1"
          >
            <p className="text-[18px]">Collection</p>
            <hr className="w-1/2 border-none h-[2px] bg-gray-700 hidden " />
          </NavLink>
          <NavLink
            to="/about"
            className="flex flex-col items-center
        gap-1"
          >
            <p className="text-[18px]">About</p>
            <hr className="w-1/2 border-none h-[2px] bg-gray-700 hidden " />
          </NavLink>
        </ul>

        <div className="flex items-center gap-5 ">
          <SearchOutlinedIcon
            onClick={() => setShowSearch(true)}
            className=" w-5 search_nd_account   rounded-md"
          />

          <div className="group relative ">
            <AccountCircleRoundedIcon className="w-5 search_nd_account rounded-full " />
            <div className="group-hover:block hidden absolute dropdown-menu drop-shadow-lg right-0 pt-5">
              <div className="bg-slate-100 flex flex-col gap-2 w-[145px] px-5 py-3 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black ">Account</p>
                <p className="cursor-pointer hover:text-black">Settings</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <ShoppingCartRoundedIcon className="w-5 min-w-5 search_nd_account" />
            <p className=" w-4 absolute right-[-3px] bottom-[-4px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {cartNum}
            </p>
          </Link>
          <div className=" sm:hidden">
            <MenuRoundedIcon
              onClick={toggleSideMenu}
              className="w-5 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {overlay && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-40"
          onClick={closeSideMenu}
        />
      )}

      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all duration-300 ease-in-out overflow-hidden drop-shadow-lg rounded-md ${
          visible ? "w-3/4" : "w-0"
        } z-50`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="p-4" onClick={closeSideMenu}>
            <img
              src="/src/assets/back.svg"
              className="h-auto rotate-180 cursor-pointer"
              alt="back"
            />
          </div>
          <NavLink
            onClick={closeSideMenu}
            className="py-3 pl-5 border hover:bg-gray-200"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={closeSideMenu}
            className="py-3 pl-5 border hover:bg-gray-200"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={closeSideMenu}
            className="py-3 pl-5 border hover:bg-gray-200 active:bg-gray-300 active-text-white"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
