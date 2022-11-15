import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import SongDetails from "../components/SongDetails";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { RootStackParamList } from "../helpers/types";
import { NavigationProp, RouteProp } from "@react-navigation/native";

interface SongScreenProps {
    route: RouteProp<RootStackParamList, "SongScreen">
    navigation: NavigationProp<RootStackParamList, "SongScreen">
}

const SongScreen = ({ route, navigation }: SongScreenProps) => {

    const [colSwitch, setColSwitch] = useState<boolean>(true)

    const handleOnPressBtn = () => {
        setColSwitch(!colSwitch)
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Button
                onPress={() => handleOnPressBtn()}
                style={styles.button}
                title="Back to SongSearch" />
            <SongDetails songID={route.params.songID} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    button: {
        width: 150,
        paddingTop: 20,
    }
});

export default SongScreen;