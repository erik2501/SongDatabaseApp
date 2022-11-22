import { View, Text } from "react-native";

const ErrorPage = ({ message }: { message: string }) => {

    return (
        <View>
            <Text>{message}</Text>
        </View>
    )
}

export default ErrorPage;