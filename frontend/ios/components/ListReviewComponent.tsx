import { useQuery } from '@apollo/client';
import ReviewCard from './ReviewCard';
import { GET_REVIEWS } from '../helpers/queries';
import { Text, View } from 'react-native';

// this is a component that fetches the 10 last reviews from the db and displays them with info 
const ListReviews = ({ songID }: { songID: number }) => {

    // this query gets the last 10 reviews of a specific song
    const { loading, error, data } = useQuery(GET_REVIEWS, { variables: { songID: songID, amount: 10 } });

    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>`Error! ${error.message}`</Text>;

    return (
        <View style={{marginBottom: 300, width: '80%', alignSelf: 'center'}}>
            {
                data.reviewsBySongID?.map((review: { userName: string; star: number; description: string; }, index: number) => (
                    <ReviewCard userName={review.userName} star={review.star} description={review.description} key={index} />
                ))
            }
        </View>
    )
}

export default ListReviews