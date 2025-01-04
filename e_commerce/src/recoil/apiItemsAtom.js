import { atom } from 'recoil';

const apiItemsAtom = atom({
    key: 'apiItemsAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export default apiItemsAtom;