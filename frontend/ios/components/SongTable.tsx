import { NetworkStatus, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { RootStackParamList, Song } from "../helpers/types";
import ErrorPage from "../screens/ErrorPage";
import SongCard from "./SongCard";
import { useRecoilValue } from 'recoil';
import { offsetAtom, yearAtom, searchWordAtom, orderAtom, pageSizeAtom } from '../shared/globalState';
import { GET_SEARCH } from "../helpers/queries";
import { Dimensions, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

interface SongTableProps {
    navigationHome: NavigationProp<RootStackParamList, "Home">;
    navigationError: NavigationProp<RootStackParamList, "ErrorPage">;
}

interface GetSongsQueryResult {
    songSearch: Song[];
}

// definerer debounce funksjonen vår 
// const debounceFetch = debounce((fetchFunc: () => void) => fetchFunc())

// This component displays the songs on the homepage. 
const SongTable = ({ navigationHome, navigationError }: SongTableProps) => {

    // We are using Recoil State Management to get the filtering variables possibly set in the searchbar 
    // and the offset set in pagination
    const searchWord = useRecoilValue(searchWordAtom);
    const offset = useRecoilValue(offsetAtom);
    const year = useRecoilValue(yearAtom);
    const order = useRecoilValue(orderAtom);
    const pageSize = useRecoilValue(pageSizeAtom);

    // this query gets the songs with the users specified filtering
    const [songs, setSongs] = useState<Song[]>([]);
    const { loading, error, data, fetchMore, refetch, networkStatus } = useQuery<GetSongsQueryResult>(GET_SEARCH, { variables: { skip: 0, amount: pageSize, searchWord: searchWord, year: year, order: order } });
    const noSongs = "No songs were found."

    useEffect(() => {
        if (data) {
            setSongs(data.songSearch);
        }
    }, [data])

    const onUpdate = (prev: GetSongsQueryResult, { fetchMoreResult }: { fetchMoreResult: GetSongsQueryResult }): GetSongsQueryResult => {
        if (!fetchMoreResult) return prev;
        const localSongs = [
            ...prev.songSearch,
            ...fetchMoreResult.songSearch,
        ];
        return Object.assign({}, prev, {
            songSearch: localSongs,
        });
    };

    const handleOnEndReached = () => {
        return fetchMore({
            variables: {
                skip: data?.songSearch.length,
                amount: pageSize,
            },
            updateQuery: onUpdate,
        });
    };

    const refreshing = networkStatus === NetworkStatus.refetch;

    if (error) return <ErrorPage message={`Error! ${error.message}`} navigation={navigationError} />;

    return (
        <View style={{ height: '100%', width: '100%', alignSelf: 'center' }}>
            <FlashList
                data={songs}
                renderItem={({ item }) => <SongCard song={item} navigation={navigationHome} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0}
                onEndReached={handleOnEndReached}
                onRefresh={refetch}
                refreshing={refreshing}
                estimatedItemSize={200}
            />
        </View>
    )
}

export default SongTable;