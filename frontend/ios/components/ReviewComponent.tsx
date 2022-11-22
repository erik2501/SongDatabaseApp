import { useMutation } from "@apollo/client";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AirbnbRating, Button } from "react-native-elements";
import { CREATE_REVIEW, GET_REVIEWS } from "../helpers/queries";

const ReviewComponent = ({ songID }: { songID: number }) => {

    // these are the variables for each field for the review, and the message is an error message
    const [star, setStar] = useState<number | null>()
    const [userName, setUserName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [message, setMessage] = useState<string>("");

    // this is the mutation that adds a review to the db
    const [createReview, { loading }] = useMutation(CREATE_REVIEW, { refetchQueries: [GET_REVIEWS] });

    // handles submit-button clicks, by creating a review if the needed variables are filled out, and displaying message if not
    const handleSubmit = () => {
        if (userName && star) {
            setMessage("");
            createReview({ variables: { userName: userName, star: star, description: description, songID: songID } });
            setUserName(undefined);
            setStar(undefined);
            setDescription(undefined);
        } else {
            setMessage('Fill inn name and stars');
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
                defaultRating={0}
                onFinishRating={setStar} />
            <TextInput
                style={styles.inputRev}
                onChangeText={setDescription}
                value={description}
                multiline={true}
                
            />
            <Button onPress={() => handleSubmit()}
                title='Submit Review'
                buttonStyle={{
                    backgroundColor: '#89b9cc',
                    borderRadius: 3,
                }} 
                titleStyle={{color: '#222831'}}
            />
            <Text style={styles.errorMsg}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        marginVertical: 7,
        fontSize: 20,
        fontWeight: "bold",
        color: 'lightgrey'
    },
    subtitleText: {
        marginVertical: 7,
        fontSize: 15,
        color: 'lightgrey'
    },
    inputName: {
        height: 50,
        width: '70%',
        backgroundColor: '#595959', 
        borderRadius: 13,
        padding: 10,
        margin: 10,
        color: 'lightgrey',
        fontSize: 17
    },
    inputRev: {
        height: 170,
        width: '70%',
        backgroundColor: '#595959', 
        borderRadius: 13,
        padding: 10,
        margin: 10,
        color: 'lightgrey',
        fontSize: 17
    },
    errorMsg: {
        color: 'black'
    }
});

export default ReviewComponent;