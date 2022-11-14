import Header from '../components/Header';
import { useQuery, gql } from "@apollo/client";
import { useEffect } from 'react';
import { Text } from "react-native";
import { GET_SEARCH } from '../helpers/queries';
import { Song } from '../helpers/types';

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