import { ScrollView, View } from "react-native";
import SongDetails from "../components/SongDetails";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../helpers/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import ReviewComponent from "../components/ReviewComponent";
import ListReviews from "../components/ListReviewComponent";
import { Dimensions } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { orientationAtom } from '../shared/globalState';

//Defines the interface for the songScreen prop
interface SongScreenProps {
    route: RouteProp<RootStackParamList, "SongScreen">
    navigation: NavigationProp<RootStackParamList, "SongScreen">
}
//This screen displays the detailed info about a song and all the methods of reviews
const SongScreen = ({ route }: SongScreenProps) => {

    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    const setOrientation = useSetRecoilState(orientationAtom);

    Dimensions.addEventListener('change', () => {
        setOrientation(isPortrait());
    });

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
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
        backgroundColor: '#222831',
        alignItems: 'center',
        color: 'lightgrey',
        borderTopWidth: 0.2,
        borderTopColor: '#525c69'
    }
});

export default SongScreen;