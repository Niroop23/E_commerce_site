import { atom } from 'recoil';

const cartNumberAtom = atom({
    key: 'cartNumberAtom', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});

export default cartNumberAtom;