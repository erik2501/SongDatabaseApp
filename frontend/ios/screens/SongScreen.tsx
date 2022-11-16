import { ScrollView, View } from "react-native"
import { Button, Text } from "react-native-elements"
import SongDetails from "../components/SongDetails";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { RootStackParamList } from "../helpers/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import ReviewComponent from "../components/ReviewComponent";
import ListReviews from "../components/ListReviewComponent";

interface SongScreenProps {
    route: RouteProp<RootStackParamList, "SongScreen">
    navigation: NavigationProp<RootStackParamList, "SongScreen">
}

const SongScreen = ({ route, navigation }: SongScreenProps) => {



    return (
        <View style={styles.container}>
            <ScrollView>
                <SongDetails songID={route.params.songID} />
                <ReviewComponent songID={route.params.songID} />
                <ListReviews songID={route.params.songID} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    }
});

export default SongScreen;