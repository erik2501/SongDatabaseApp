import { View } from "react-native"
import { Button, Text } from "react-native-elements"
import SongDetails from "../components/SongDetails";
import { StyleSheet } from "react-native";
import { useState } from "react";


const SongScreen = () => {
    const songID = 0;
    const [colSwitch, setColSwitch] = useState<boolean>(true)
    return (
        <View style={styles.container}>
            <Button 
                onPress = {() => setColSwitch(!colSwitch) }
                style={styles.button} 
                title="Back to SongSearch"/>            
            <SongDetails songID={songID}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
    },
    button : {
        width: 150,
        paddingTop: 20,
    }   
  });

export default SongScreen;