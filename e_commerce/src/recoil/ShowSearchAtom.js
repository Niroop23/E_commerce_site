import { atom } from 'recoil';

const ShowSearchAtom = atom({
    key: 'ShowSearchAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export default ShowSearchAtom;