import React, { useEffect, useState } from "react";
import ShowSearchAtom from "../recoil/ShowSearchAtom";
import { useRecoilState } from "recoil";
import searchAtom from "../recoil/searchAtom";
import { useLocation } from "react-router";

const SearchBar = () => {
  const [search, setSearch] = useRecoilState(searchAtom);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showSearch, setShowSearch] = useRecoilState(ShowSearchAtom);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [location]);

  return showSearch && searchVisible ? (
    <div className="border-t border-b bg-[#e3e6e6] text-center ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-[whitesmoke]">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src="/src/assets/search.svg" className="w-5" alt="search icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src="/src/assets/close.svg"
        alt="close"
      />
    </div>
  ) : null;
};

export default SearchBar;
