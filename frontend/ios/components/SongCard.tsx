import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const cardWidth = windowWidth * 0.9;
const cardHeight = windowHeight * 0.2;



function SongCard() {



    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title='Songname' />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                </Card.Actions>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: cardWidth,
        height: cardHeight,
        margin: 16
    },
});


export default SongCard;