import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { AirbnbRating, Button } from "react-native-elements";
import { CREATE_REVIEW, GET_REVIEWS } from "../helpers/queries";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ReviewComponent({ songID }: { songID: number }) {



    // these are the variables for each field for the review, and the message is an error message
    const [star, setStar] = useState<number | null>()
    const [userName, setUserName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [message, setMessage] = useState<string>("");

    // this is the mutation that adds a review to the db
    const [createReview, { loading }] = useMutation(CREATE_REVIEW, { refetchQueries: [GET_REVIEWS] });

    // handles submit-button clicks, by creating a review if the needed variables are filled out, and displaying message if not
    const handleSubmit = () => {
        console.log('det er handle submit som blir logga' + userName, star)
        if (userName && star) {
            setMessage("")
            createReview({ variables: { userName: userName, star: star, description: description, songID: songID } });
            setUserName(undefined)
            setStar(undefined)
        } else {
            setMessage('Fill inn name and stars')
        }
    }

    if (loading) return <Text>'Submitting...'</Text>;


    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.titleText}>Add review: </Text>
            <Text style={styles.subtitleText}>Write your name: </Text>
            <TextInput
                style={styles.inputName}
                onChangeText={setUserName}
                value={userName}
            />
            <Text style={styles.subtitleText}>Add star and review:  </Text>
            <AirbnbRating
                showRating={false}
                size={19}
                reviewSize={15}
                onFinishRating={setStar} />
            <TextInput
                style={styles.inputRev}
                onChangeText={setDescription}
                value={description}
            />
            <Button onPress={() => handleSubmit()}
                title='Submit Review'
                buttonStyle={{
                    backgroundColor: '#89b9cc',
                    borderRadius: 3,
                }} />
            <Text style={styles.errorMsg}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        marginVertical: 7,
        fontSize: 20,
        fontWeight: "bold",
        color: 'black'
    },
    subtitleText: {
        marginVertical: 7,
        fontSize: 15,
        color: 'black'
    },
    reviewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputName: {
        height: windowHeight * 0.07,
        width: windowWidth * 0.8,
        borderWidth: 4,
        borderColor: '#b0b3b8',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    inputRev: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.8,
        borderWidth: 4,
        borderColor: '#b0b3b8',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    errorMsg: {
        color: 'black'
    }
});


export default ReviewComponent;