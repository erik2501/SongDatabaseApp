import React from 'react';
import { useRecoilValue } from 'recoil';
import { offsetAtom, searchWordAtom, yearAtom, orderAtom, pageSizeAtom } from '../shared/globalState';
import { Text } from "react-native";
import { GET_SEARCH } from '../helpers/queries';
import { Song } from '../helpers/types';
import { useQuery } from "@apollo/client";

const SongTableComponent = () => {

    const searchWord = useRecoilValue(searchWordAtom);
    const offset = useRecoilValue(offsetAtom);
    const year = useRecoilValue(yearAtom);
    const order = useRecoilValue(orderAtom);
    const pageSize = useRecoilValue(pageSizeAtom);

    const {data} = useQuery(GET_SEARCH, {variables: { skip: offset, amount: pageSize, searchWord: searchWord, year: year, order: order }});


    return (
        <>
            {data?.songSearch.map((song: Song) => {
                return (
                    <Text>{ song.songName }</Text>
                )
            })}
        </>
    )
}

export default SongTableComponent;