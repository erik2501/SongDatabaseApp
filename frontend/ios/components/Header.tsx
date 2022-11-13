import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const headerHeight = windowHeight * 0.1;

const styles = StyleSheet.create({
    container: {
        height: headerHeight,
        backgroundColor: '#c2eeff',
        width: windowWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    header: {
        fontSize: 20,
        fontWeight:'bold'
    }
});





const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>IMDB - International Music DataBase</Text>
        </View>
    )
}
export default Header;
