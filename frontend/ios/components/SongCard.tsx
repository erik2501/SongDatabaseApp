import { useQuery } from "@apollo/client";
import { Image, Dimensions, StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-elements";
import { GET_AVG_REVIEW_SCORE } from "../helpers/queries";
import { Song } from "../helpers/types";



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const cardWidth = windowWidth * 0.9;
const cardHeight = windowHeight * 0.2;



function SongCard({ song }: { song: Song }) {

    const { data } = useQuery(GET_AVG_REVIEW_SCORE, { variables: { songID: song.songID } })

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
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
                            size={15}
                            defaultRating={data.reviewAvgScoreBySongID[0].avgScore}
                            isDisabled={true}
                        />
                    }
                </View>
            </View>
        </View>
    )

    // return (
    //     <View style={styles.container}>
    //         <Card>
    //             <Card.Content>
    //                 <Title>{song.songName}</Title>
    //                 <Paragraph>{song.artistName}</Paragraph>
    //             </Card.Content>
    //             <Card.Cover source={{ uri: song.imageURL }} />
    //             <Card.Actions>
    //             </Card.Actions>
    //         </Card>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#e0e0e0',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: cardWidth * 0.05,
        marginVertical: 16
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        flexDirection: 'row'
    },
    cardImg: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3
    },
    cardInfo: {
        flex: 1
    },
    cardImgContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    baseText: {
        marginVertical: 6
    },
    titleText: {
        marginVertical: 7,
        fontSize: 20,
        fontWeight: "bold"
    }
});


export default SongCard;