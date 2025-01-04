import { atom } from 'recoil';

const prodIdAtom = atom({
    key: 'prodIdAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export default prodIdAtom;