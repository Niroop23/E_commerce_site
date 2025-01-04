

import { atom } from 'recoil';

const searchAtom = atom({
    key: 'searchAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export default searchAtom;