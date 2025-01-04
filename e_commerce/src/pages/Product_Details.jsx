//a seperate page that displays info about the selected product
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiDataAtom from "../recoil/apiDataAtom";
import { useRecoilState } from "recoil";
import prodIdAtom from "../recoil/prodIdAtom";
import cartNumberAtom from "../recoil/cartNumberAtom";
import apiItemsAtom from "../recoil/apiItemsAtom";
import cartItemsAtom from "../recoil/cartItemsAtom";

const Product_Details = () => {
  const [apiItems, setApiItems] = useRecoilState(apiItemsAtom);
  const [prod_id, setProd_id] = useRecoilState(prodIdAtom);
  const [cartNum, setCartNum] = useRecoilState(cartNumberAtom);
  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);
  const [loading, setLoading] = useState(true);

  const cartNumHandler = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    const updatedCartNum = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartNum(updatedCartNum);
    localStorage.setItem("cartNum", updatedCartNum);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setApiItems(json);
        console.log(apiItems);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to retrieve data");
        setLoading(false);
      });
  }, [setApiItems]);

  if (loading)
    return (
      <div className="text-2xl text-center">
        <p>Loading Product...</p>
      </div>
    );

  let cur_index = prod_id - 1;
  return (
    <div>
      <div>
        {apiItems[cur_index] && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 pb-[100px]">
            <div className="flex justify-center">
              <img
                src={apiItems[cur_index].image}
                alt={apiItems[cur_index].title}
                className="h-96"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold line-clamp-2">
                {apiItems[cur_index].title}
              </h1>{" "}
              <p className="text-2xl font-semibold mt-5">
                ${apiItems[cur_index].price}
              </p>
              <p className="text-md font-light mt-2 line-clamp-4">
                {apiItems[cur_index].description}
              </p>
              <Link
                to="/cart"
                className="bg-black text-white px-5 py-2 mt-5 inline-block"
                onClick={() => cartNumHandler(apiItems[cur_index])}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product_Details;
