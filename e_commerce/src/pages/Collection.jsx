import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";

import { Link } from "react-router-dom";
import apiItemsAtom from "../recoil/apiItemsAtom";
import prodIdAtom from "../recoil/prodIdAtom";
import ShowSearchAtom from "../recoil/ShowSearchAtom";
import searchAtom from "../recoil/searchAtom";

const Collection = () => {
  const [apiItems, setApiItems] = useRecoilState(apiItemsAtom);
  const [prod_id, setProd_id] = useRecoilState(prodIdAtom);
  const [filter, setFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("relavent");
  const search = useRecoilValue(searchAtom);
  const showSearch = useRecoilValue(ShowSearchAtom);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setApiItems(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterByCat = (items) => {
    if (selectedCategory === "all") return items;

    return items.filter((item) => item.category === selectedCategory);
  };

  const sortProds = (items) => {
    if (sort === "relavent") return items;
    if (sort === "low-high")
      return [...items].sort((a, b) => a.price - b.price);

    //initially ussed item instead of [...items] which was causing the original array to be sorted and the original array was being changed

    if (sort === "high-low")
      return [...items].sort((a, b) => b.price - a.price);

    return items;
    //if any error occurs all products will be displayed a safety measure to prevent unexpected crashes
  };

  const finalItems = sortProds(
    filterByCat(
      (apiItems || []).filter((item) => {
        return item?.title
          ?.toLowerCase()
          ?.includes((search || "").toLowerCase());
      })
    )
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t pb-5  bg-[#e3e6e6]">
        {/*filters*/}
        <div className="min-w-60">
          <div>
            <div className="sm:hidden">
              <p
                className="my-2 text-xl flex items-center cursor-pointer gap-2"
                onClick={() => setFilter(!filter)}
              >
                Filters
                <ArrowDropDownTwoToneIcon
                  fontSize="medium"
                  className={` cursor-pointer sm:hidden ${
                    filter ? "rotate-180" : ""
                  }`}
                />
              </p>
            </div>
          </div>
          {/*category  wise */}
          <div
            className={`border border-gray-400 pl-5 py-4 mt-7 ${
              filter ? "" : "hidden"
            } sm:block select-none bg-gray-50 `}
          >
            <p className="mb-3 text-sm font-medium ">Categories</p>
            <div className=" flex flex-col gap-2 text-sm font-light text-gray-700 ">
              <p className="flex gap-2 ">
                <input
                  id="all"
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value="all"
                  checked={selectedCategory === "all"}
                  onChange={() => setSelectedCategory("all")}
                />
                <label htmlFor="all" className="cursor-pointer ">
                  All
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  id="men's clothing"
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value="men's clothing"
                  checked={selectedCategory === "men's clothing"}
                  onChange={() => setSelectedCategory("men's clothing")}
                />
                <label htmlFor="men's clothing" className="cursor-pointer">
                  Men's clothing
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  id="women's clothing"
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value="women's clothing"
                  checked={selectedCategory === "women's clothing"}
                  onChange={() => setSelectedCategory("women's clothing")}
                />
                <label htmlFor="women's clothing" className="cursor-pointer">
                  Women's clothing
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  id="jewelery"
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value="jewelery"
                  checked={selectedCategory === "jewelery"}
                  onChange={() => setSelectedCategory("jewelery")}
                />
                <label htmlFor="jewelery" className="cursor-pointer">
                  jewelery
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  id="electronics"
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  value="electronics"
                  checked={selectedCategory === "electronics"}
                  onChange={() => setSelectedCategory("electronics")}
                />
                <label htmlFor="electronics" className="cursor-pointer">
                  Electronics
                </label>
              </p>
            </div>
          </div>
        </div>
        {/*products*/}
        <div className="flex-1">
          <div className="flex justify-between sm:text-2xl mb-5">
            <section className="flex gap-2 items-center    ">
              <h1>
                <span className="italic ">
                  <b>ALL</b>
                </span>{" "}
                COLLECTIONS
              </h1>
              <hr className="border-gray-700 border-[1px] w-10 mt-2" />
            </section>
            {/*product sorting */}
            <select
              className="border-2 border-gray-300 text-sm px-2 py-1 
            "
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* products from api call */}
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  sm:max-w-[300px] md:max-w-[800px] lg:max-w-[1200px] mx-auto">
            {finalItems &&
              finalItems.map((item) => (
                <Link
                  to={`/product/${item?.id}`}
                  key={item.id}
                  onClick={() => setProd_id(item?.id)}
                >
                  <div className="border border-gray-300 bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out delay-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:max-w-[300px] h-60 object-scale-down"
                      />
                      <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 bg-gray-600 text-white p-1 transition-all duration-300 ease-in-out delay-100 ">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-2">
                      <h1 className="text-lg font-semibold break-words line-clamp-1 md:line-clamp-2 mb-2">
                        {item.title}
                      </h1>

                      <p className="text-lg font-semibold">${item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
