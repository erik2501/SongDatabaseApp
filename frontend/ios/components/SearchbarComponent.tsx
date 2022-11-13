import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useRecoilState } from 'recoil';
import { offsetAtom, searchWordAtom } from '../shared/globalState';

function SearchbarComponent() {

    const [searchWord, setSearchWord] = useRecoilState(searchWordAtom);
    const [offset, setOffset] = useRecoilState(offsetAtom);


    const handleSearch = (value: string) => {
        setSearchWord(value);
        setOffset(0);
    }

    return (
        <Searchbar
            placeholder="Search"
            value={searchWord}
            onChangeText={handleSearch}
        />
    )
}

export default Searchbar;