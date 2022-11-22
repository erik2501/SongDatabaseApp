import { NetworkStatus, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { RootStackParamList, Song } from "../helpers/types";
import SongCard from "./SongCard";
import { useRecoilValue } from 'recoil';
import { yearAtom, searchWordAtom, orderAtom, pageSizeAtom } from '../shared/globalState';
import { GET_SEARCH } from "../helpers/queries";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

interface SongTableProps {
    navigation: NavigationProp<RootStackParamList, "Home">;
}

interface GetSongsQueryResult {
    songSearch: Song[];
}

// This component displays the songs on the homepage. 
const SongTable = ({ navigation }: SongTableProps) => {

    // We are using Recoil State Management to get the filtering variables possibly set in the searchbar 
    // and the offset set in pagination
    const searchWord = useRecoilValue(searchWordAtom);
    const year = useRecoilValue(yearAtom);
    const order = useRecoilValue(orderAtom);
    const pageSize = useRecoilValue(pageSizeAtom);

    // this query gets the songs with the users specified filtering
    const [songs, setSongs] = useState<Song[]>([]);
    const { error, data, fetchMore, refetch, networkStatus } = useQuery<GetSongsQueryResult>(GET_SEARCH, {variables: { skip: 0, amount: pageSize, searchWord: searchWord, year: year, order: order }});

    useEffect(() => {
        if (data) {
            setSongs(data.songSearch);
        }
    }, [data])

    const onUpdate = (prev: GetSongsQueryResult, { fetchMoreResult }: { fetchMoreResult: GetSongsQueryResult }): GetSongsQueryResult => {
        if (!fetchMoreResult) return prev;
        // merging the old list of songs with the new songs that are fetched with the new query
        const localSongs = [
            ...prev.songSearch,
            ...fetchMoreResult.songSearch,
        ];
        return Object.assign({}, prev, {
            songSearch: localSongs,
        });
    };

    // function loading in new songs when the bottom of the page is reached
    const handleOnEndReached = () => {
        return fetchMore({
            variables: {
                // skips the number of songs that are already on the page and loads in the next 10
                skip: data?.songSearch.length,
                amount: pageSize,
            },
            updateQuery: onUpdate,
        });
    };

    const refreshing = networkStatus === NetworkStatus.refetch;

    if (error) return <Text>`Error! ${error.message}`</Text>

    return (
        <View style={{ height: '100%', width: '100%', alignSelf: 'center' }}>
            <FlashList
                data={songs}
                renderItem={({ item }) => <SongCard song={item} navigation={navigation} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0}
                onEndReached={handleOnEndReached}
                onRefresh={refetch}
                refreshing={refreshing}
                estimatedItemSize={200}
                ListFooterComponentStyle={{marginBottom: 100}}
            />
        </View>
    )
}

export default SongTable;