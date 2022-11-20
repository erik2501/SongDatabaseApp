import React from 'react';
import { View, SafeAreaView } from "react-native";
import SongTable from '../components/SongTable';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../helpers/types";
import SearchbarComponent from "../components/Searchbar";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  return (
    <SafeAreaView>
      <BottomSheetModalProvider>
        <SearchbarComponent/>
        <SongTable navigation={navigation} />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}