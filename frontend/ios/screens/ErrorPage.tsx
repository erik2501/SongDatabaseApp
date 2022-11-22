import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../helpers/types";
import { Button } from "react-native-elements";


interface ErrorPageProps {
    message: string,
    navigation: NavigationProp<RootStackParamList, "ErrorPage">
}

const ErrorPage = ({ message, navigation }: ErrorPageProps) => {

    const [colSwitch, setColSwitch] = useState<boolean>(true);

    const handleOnPressBtn = () => {
        setColSwitch(!colSwitch);
        navigation.navigate('Home');
    }

    return (
        <View>
            <Button onPress={() => handleOnPressBtn()}
                title='Back to homescreen'
                buttonStyle={{
                    backgroundColor: '#89b9cc',
                    borderRadius: 3,
                    width: 120,
                    marginTop: 10
                }}
                titleStyle={{ color: '#222831' }}
            />
            <Text>{message}</Text>
        </View>
    )
}

export default ErrorPage;