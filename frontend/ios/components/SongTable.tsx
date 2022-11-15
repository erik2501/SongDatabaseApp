import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { RootStackParamList, Song } from "../helpers/types";
import ErrorPage from "../screens/ErrorPage";
import SongCard from "./SongCard";
import { useRecoilValue } from 'recoil';
import { offsetAtom, yearAtom, searchWordAtom, orderAtom, pageSizeAtom } from '../shared/globalState';
import { GET_SEARCH } from "../helpers/queries";
import { ScrollView, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface SongTableProps {
    navigation: NavigationProp<RootStackParamList, "Home">
}


// definerer debounce funksjonen vår 
// const debounceFetch = debounce((fetchFunc: () => void) => fetchFunc())

// This component displays the songs on the homepage. 
const SongTable = ({ navigation }: SongTableProps) => {

    // We are using Recoil State Management to get the filtering variables possibly set in the searchbar 
    // and the offset set in pagination
    const searchWord = useRecoilValue(searchWordAtom);
    const offset = useRecoilValue(offsetAtom);
    const year = useRecoilValue(yearAtom);
    const order = useRecoilValue(orderAtom);
    const pageSize = useRecoilValue(pageSizeAtom);

    // this query gets the songs with the users specified filtering
    const [songs, setSongs] = useState<Song[]>([]);
    const [fetchSongs, { loading, error, data }] = useLazyQuery(GET_SEARCH);
    const noSongs = "No songs were found."

    useEffect(() => {
        if (data) {
            setSongs(data.songSearch);
        }
    }, [data])

    // when user changes searchword, this debounce function will fetch filtered songs 500 milliseconds after first input change
    useEffect(() => {
        fetchSongs({ variables: { skip: offset, amount: pageSize, searchWord: searchWord, year: year, order: order } })
    }, [searchWord])

    // when the user changes page, order or year the songs are being fetched immediately.
    useEffect(() => {
        fetchSongs({ variables: { skip: offset, amount: pageSize, searchWord: searchWord, year: year, order: order } })
    }, [offset, order, year])

    if (error) return <ErrorPage message={`Error! ${error.message}`} />;

    return (
        <View  >
            {/* <Text>
                {loading ? 'Loading..' : ''}
            </Text> */}
            <ScrollView>
                {/* have to add validation for if the list is empty */}
                {songs.map((song, index) => {
                    return (
                        <View>
                            <SongCard key={index} song={song} navigation={navigation} />
                        </View>
                    )
                })}
            </ScrollView>

        </View>
    )
}

export default SongTable;


/* <View>
    {(songs.length === 0 && !loading) ? console.log("No songs were found") :
        songs.map((song, index) => {
            return (
                <SongCard key={index} song={song} />
            )
        })}
</View> */