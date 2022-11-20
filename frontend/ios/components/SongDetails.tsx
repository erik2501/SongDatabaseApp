import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle, Image } from "react-native";
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { SongAllData } from "../helpers/types";
import { useQuery } from "@apollo/client";
import { GET_SONG_BY_SONGID } from "../helpers/queries";

type Style = {
    container: ViewStyle;
    container2: ViewStyle;
    title: TextStyle;
    logo: ImageStyle;
};

//songDetails med hardkodet info
const SongDetails = ({ songID }: { songID: number }) => {

    //const songID = 0;

    //helpfunction from millisecond to minutes
    const msecToMin = (msec : number) => {
        var minutes = Math.floor((msec % 3600000) / 60000) 
        const seconds = Math.floor(((msec % 360000) % 60000) / 1000) 
            return {
            clock : minutes + ":" + seconds
        };
    }
    console.log(songID)
    
    const [song, setSong] = useState<SongAllData>();
    const { loading, error, data } = useQuery(GET_SONG_BY_SONGID, { variables: { songID: songID } });

    
    useEffect(() => {
        if (data) {
            setSong(data.songBySongID[0])
        }
    }, [data])


    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>`Error! ${error.message}`</Text>;
    if (!song) return <Text>Could not find this song.</Text>
        
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                uri: song.imageURL,
                }}
            />
            <View style={styles.container2}>
                <Entypo name="beamed-note" size={24} color="#ff0266" />
                <Text style={styles.title}>{song?.songName}</Text>
            </View>
            <View style={styles.container2}>
                <Feather name="user" size={24} color="#ff0266" />
                <Text style={styles.title}>{song?.artistName}</Text>
            </View>
            <View style={styles.container2}>
                <Feather name="calendar" size={24} color="#ff0266" />
                <Text style={styles.title}>{song?.year}</Text>
            </View>
            <View style={styles.container2}>
                <Feather name="clock" size={24} color="#ff0266" />
                <Text style={styles.title}>{msecToMin(song?.durationMS).clock}</Text>
            </View>
            <View style={styles.container2}>
                <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="#ff0266" />
                <Text style={styles.title}>{song?.energy}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color : 'black',
        textAlign: 'center',

    },
    logo: {
        width: 300,
        height: 300,
        borderRadius: 30,
      },
});

export default SongDetails;
