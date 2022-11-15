<<<<<<< HEAD
import Header from '../components/Header';
import SearchbarComponent from '../components/Searchbar';
import SongTableComponent from '../components/SongTable';

=======
import { useQuery, gql } from "@apollo/client";
import { Text, View } from "react-native";
import { GET_SEARCH } from '../helpers/queries';
import SongTable from '../components/SongTable';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../helpers/types";

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const offset = 0
  const pageSize = 4
  const searchWord = ''
  const year = 0
  const order = -1

  const { data } = useQuery(GET_SEARCH, { variables: { skip: offset, amount: pageSize, searchWord: searchWord, year: year, order: order } });
>>>>>>> dev

const HomeScreen = () => {

  return (
<<<<<<< HEAD
    <>
      <Header/>
      <SearchbarComponent/>
      <SongTableComponent/>
    </>
=======
    <View>
      <SongTable navigation={navigation} />
    </View>
>>>>>>> dev
  );
}

export default HomeScreen;