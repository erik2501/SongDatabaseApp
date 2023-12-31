import { StyleSheet, Text, View } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { reviewProp } from "../helpers/types";


const ReviewCard = (props: reviewProp) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textName}>{props.userName}</Text>
            <AirbnbRating
                showRating={false}
                size={19}
                reviewSize={15}
                defaultRating={props.star}
                isDisabled={true} />
            <Text style={styles.text}>{props.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#343b45',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 8,
        alignItems: 'center',
        padding:5
    },
    textName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'lightgrey'
    },
    text: {
        fontSize: 20,
        color: 'lightgrey'
    }
})

export default ReviewCard;