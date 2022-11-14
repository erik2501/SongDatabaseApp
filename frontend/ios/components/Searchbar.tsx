import React, { useState } from 'react';
import { Text } from 'react-native';
import { useRecoilState } from 'recoil';
import { offsetAtom, searchWordAtom, yearAtom, orderAtom } from '../shared/globalState';

const SearchbarComponent = () => {

    const [searchWord, setSearchWord] = useRecoilState(searchWordAtom);
    const [offset, setOffset] = useRecoilState(offsetAtom);
    const [year, setYear] = useRecoilState(yearAtom);
    const [order, setOrder] = useRecoilState(orderAtom);


    const handleSearch = (value: string) => {
        setSearchWord(value);
        setOffset(0);
    }

    return (
        <>
            <Text>Searchbar</Text>
            <Text>{offset}</Text>
            <Text>{order}</Text>
            <Text>{searchWord}</Text>
            <Text>{year}</Text>
        </>
    )
}

export default SearchbarComponent;