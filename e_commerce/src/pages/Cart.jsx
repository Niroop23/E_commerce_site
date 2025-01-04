import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import cartItemsAtom from "../recoil/cartItemsAtom";
import cartNumberAtom from "../recoil/cartNumberAtom";

const Cart = () => {
  const cartItems = useRecoilValue(cartItemsAtom);
  const [cartNum, setCartNum] = useRecoilState(cartNumberAtom);

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
  });

  console.log("CARTITEMS", cartItems);
  // If the cart is empty
  if (cartItems.length === 0) {
    return (
      <div>
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

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">
        Cart has {cartNum} items
      </h2>
      <div className="mt-5">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <td className="p-2 border border-gray-300">Product</td>
              <td className="p-2 border border-gray-300">Price</td>
              <td className="p-2 border border-gray-300">Quantity</td>
              <td className="p-2 border border-gray-300">Total</td>
            </tr>
          </thead>
          <tbody>
            {/* Dynamically generate rows for each item in the cart */}
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="p-2 border border-gray-300 w-[120px]">
                  <img src={item.image} alt="" />
                </td>
                <td className="p-2 border border-gray-300 ">
                  <span className="text-red-800">${item.price}</span>
                </td>
                <td className="p-2 border border-gray-300 ">{item.quantity}</td>
                <td className="p-2 border border-gray-300">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 pb-8 text-right font-semibold">
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
