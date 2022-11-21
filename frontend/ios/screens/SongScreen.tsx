import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import SongDetails from "../components/SongDetails";
import { RootStackParamList } from "../helpers/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import ReviewComponent from "../components/ReviewComponent";
import ListReviews from "../components/ListReviewComponent";
import { useSetRecoilState } from 'recoil';
import { orientationAtom } from '../shared/globalState';

interface SongScreenProps {
    route: RouteProp<RootStackParamList, "SongScreen">
    navigation: NavigationProp<RootStackParamList, "SongScreen">
}

const SongScreen = ({ route, navigation }: SongScreenProps) => {

    // Function that returns true if the screen is in portrait mode, and false if in landscape mode
    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    const setOrientation = useSetRecoilState(orientationAtom);

    // EventListener that updates the orientationAtom when phone-orientation is changed
    Dimensions.addEventListener('change', () => {
        setOrientation(isPortrait());
    });

    return (
        <View style={styles.container}>
            <ScrollView style={{width: '100%'}}>
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