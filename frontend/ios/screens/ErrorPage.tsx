import { View, Text } from "react-native";

// if the user changes the url to a url that is wrong, this page is displayed.
const ErrorPage = ({ message }: { message: string }) => {

    // const nav = useNavigate();

    // const backToHome = () => {
    //     nav('/')
    //     window.location.reload()
    // }

    return (
        <View>
            {/* <button onClick={() => backToHome()}>Back to songsearch</button> */}
            <Text>{message}</Text>
        </View>
    )
}

export default ErrorPage;