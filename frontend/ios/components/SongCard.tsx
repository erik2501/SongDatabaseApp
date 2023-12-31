import { useQuery } from "@apollo/client";
import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AirbnbRating, Button } from "react-native-elements";
import { GET_AVG_REVIEW_SCORE } from "../helpers/queries";
import { RootStackParamList, Song } from "../helpers/types";
import { useRecoilValue } from 'recoil';
import { orientationAtom } from '../shared/globalState';

interface SongCardProps {
    song: Song,
    navigation: NavigationProp<RootStackParamList, "Home">
}

const SongCard = ({ song, navigation }: SongCardProps) => {

    //This query gets and calculates the average score for each song
    const { data } = useQuery(GET_AVG_REVIEW_SCORE, { variables: { songID: song.songID } })
    const [ colSwitch, setColSwitch ] = useState<boolean>(true);
    const orientation = useRecoilValue(orientationAtom);

    const handleOnPressBtn = () => {
        setColSwitch(!colSwitch);
        navigation.navigate('SongScreen', { songID: song.songID });
    }

    return (
        <View style={[styles.card, orientation ? { width: '85%' } : { width: '65%' }]}>
            <View style={styles.cardImgContainer}>
                <Image
                    style={styles.cardImg}
                    source={{
                        uri: song.imageURL,
                    }} />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.titleText}>{song.songName}</Text>
                <Text style={styles.baseText}>{song.artistName}</Text>
                {data && data.reviewAvgScoreBySongID.length > 0 &&
                    <AirbnbRating
                        showRating={false}
                        size={15}
                        defaultRating={data.reviewAvgScoreBySongID[0].avgScore}
                        isDisabled={true}
                        starContainerStyle={{ alignSelf: 'flex-start' }}
                    />
                }
                <Button onPress={() => handleOnPressBtn()}
                    title='See more'
                    buttonStyle={{
                        backgroundColor: '#89b9cc',
                        borderRadius: 3,
                        width: 120,
                        marginTop: 10
                    }}
                    titleStyle={{color: '#222831'}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#343b45',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 16,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cardImg: {
        width: 120,
        height: 120
    },
    cardInfo: {
        flex: 1,
        marginLeft: 20
    },
    cardImgContainer: {
        justifyContent: 'center'
    },
    baseText: {
        marginBottom: 6,
        color: 'lightgrey',
        fontSize: 18
    },
    titleText: {
        marginVertical: 6,
        fontSize: 20,
        fontWeight: "bold",
        color: 'lightgrey'
    }
});

export default SongCard;