import Header from '../components/Header';
import { useQuery, gql } from "@apollo/client";
import { useEffect } from 'react';
import { Text } from "react-native";


const GET_SEARCH = gql`
query Get_Search ($searchWord: String, $skip: Int, $amount:Int, $year: Int, $order: Int){
    songSearch(skip: $skip, amount:$amount, searchWord: $searchWord, year: $year, order: $order ) {
        songID
        artistName
        songName
        imageURL
    }
}
`;

type Song = {
  songID: number,
  songName: string,
  artistName: string,
  imageURL: string
}

export default function HomeScreen() {

  const offset = 0
  const pageSize = 4
  const searchWord = ''
  const year = 0
  const order = -1

  const {data} = useQuery(GET_SEARCH, {variables: { skip: offset, amount: pageSize, searchWord: searchWord, year: year, order: order }});


  return (
    <>
      <Header/>
      {data?.songSearch.map((song: Song) => {
        return (
          <Text>{ song.songName }</Text>
        )
      })}
    </>
  );
}