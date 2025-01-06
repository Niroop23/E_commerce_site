import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import cartItemsAtom from "../recoil/cartItemsAtom";
import cartNumberAtom from "../recoil/cartNumberAtom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsAtom);
  const [cartNum, setCartNum] = useRecoilState(cartNumberAtom);
  const [delVisible, setDelVisible] = useState(false);

  useEffect(() => {
    const updatedCartNum = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    try {
      setCartNum(updatedCartNum);
      localStorage.setItem("cartNum", updatedCartNum);
    } catch (error) {
      console.error("error while updating cart number ", error);
    }
  }, [cartItems]);

  console.log("CARTITEMS", cartItems);
  // If the cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="h-[70vh]">
        <h2 className="text-2xl font-semi-bold text-center">
          Your Cart is Empty
        </h2>
      </div>
    );
  }

  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    if (item && item.price) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);

  const incrementItemQuantity = (index) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decrementItemQuantity = (index) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const deleteItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">
        Cart has {cartNum} items
      </h2>
      <div className="mt-5">
        <table className="w-full border-collapse border border-black bg-slate-50">
          <thead>
            <tr className="bg-gray-200">
              <td className="p-2 border border-gray-300">Product</td>
              <td className="p-2 border border-gray-300">Price</td>
              <td className="p-2 border border-gray-300">Quantity</td>
              <td className="p-2 border border-gray-300">Total</td>
              <td className="p-2 border border-gray-300 "> </td>
            </tr>
          </thead>
          <tbody>
            {/* Dynamically generate rows for each item in the cart */}
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="p-5 border border-gray-300  ">
                  <div className="flex">
                    <img
                      className="w-[100px] mr-5"
                      src={item.image}
                      alt={item.title || "product image"}
                    />
                    <div className="hidden sm:block sm:text-clip ">
                      <span className="line-clamp-2 text-ellipsis break-all">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-2 border border-gray-300">
                  <span className="text-red-800">$ {item.price}</span>
                </td>
                <td className="p-2 border border-gray-300  ">
                  <div className="inline-flex items-center gap-2 ring-2 ring-[gainsboro]  rounded-full px-[2px]">
                    <AddIcon
                      fontSize="extralight"
                      className="cursor-pointer"
                      onClick={() => incrementItemQuantity(index)}
                    />
                    <span className="select-none">{item.quantity}</span>
                    <RemoveIcon
                      fontSize="extralight"
                      className="cursor-pointer"
                      onClick={() => decrementItemQuantity(index)}
                    />
                  </div>
                </td>
                <td className="p-2 border border-gray-300">
                  $ {(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-2 border border-gray-300 ">
                  <button
                    className="text-red-800 hover:text-red-950
                  hidden sm:block
                    
               sm:px-4 sm:py-2 
               text-sm sm:text-base 
               rounded-md 
               transition-all ease-in-out duration-200 
               bg-red-100 hover:bg-red-200"
                    onClick={() => deleteItem(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 mr-12 pb-8 text-right font-semibold">
          <p>Total : ${totalPrice.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
