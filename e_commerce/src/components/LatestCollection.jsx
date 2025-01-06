import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useRecoilState } from "recoil";
import apiDataAtom from "../recoil/apiDataAtom";
import prodIdAtom from "../recoil/prodIdAtom";

const LatestCollection = () => {
  const [apiData, setApiData] = useRecoilState(apiDataAtom);

  const [prod_id, setProd_id] = useRecoilState(prodIdAtom);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  }, [setApiData]);

  return (
    <div className="my-10">
      <section className="container min-w-full p-4 sm:bg-[#3475a0c0] ">
        <header className="flex  flex-col items-center justify-center mb-4">
          <h2 className="text-2xl font-normal mb-4 text-center">
            LATEST COLLECTION
          </h2>
          <p className="text-gray-600 text-center font-prata">
            Lorem ipsum dolor sit amet consectetur adipisicing sit amet
            consectetur adipisicing elit.
          </p>
        </header>
        <main>
          <div className="relative group">
            <div className=" overflow-x-auto scrollbar-hide">
              <div className=" grid grid-cols-2  over sm:flex gap-4 mb-3">
                {apiData?.map((data) => (
                  <Link
                    to={`/product/${data.id}`}
                    key={data.id}
                    className="flex flex-col items-center justify-center min-w-fit p-4 bg-white  mx-4  rounded-md "
                    onClick={() => setProd_id(data?.id)}
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full  h-48 object-cover mb-4 "
                    />
                    <p className="text-gray-500 text-center">{data.category}</p>
                    <p className="text-center text-green-500 font-semibold ">
                      ${data.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default LatestCollection;
