import { atom } from "recoil";

const cartItemsAtom = atom({
    key: "cartItemsAtom", // unique ID for this atom
    default: [], // default value is an empty array
});

export default cartItemsAtom;
