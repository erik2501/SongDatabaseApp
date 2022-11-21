import { atom } from "recoil";
import { Dimensions } from 'react-native';

export const searchWordAtom = atom({
    key: 'searchWord-atom',
    default: ''
});

export const offsetAtom = atom({
    key: 'offset-atom',
    default: 0
})

export const pageSizeAtom = atom({
    key: 'pageSize-atom',
    default: 10
})

export const yearAtom = atom({
    key: 'year-atom',
    default: 0
})

export const orderAtom = atom({
    key: 'order-atom',
    default: -1
})

const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

export const orientationAtom = atom({
    key: 'orientation-atom',
    default: isPortrait()
})