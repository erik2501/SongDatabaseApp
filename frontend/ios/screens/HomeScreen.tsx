import React from 'react';
import { View, SafeAreaView } from "react-native";
import SongTable from '../components/SongTable';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../helpers/types";
import SearchbarComponent from "../components/Searchbar";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Dimensions } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { orientationAtom } from '../shared/globalState';



interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const setOrientation = useSetRecoilState(orientationAtom);

  Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait());
  });

  return (
    <SafeAreaView style={{backgroundColor: '#222831'}}>
      <BottomSheetModalProvider>
        <SearchbarComponent/>
        <SongTable navigation={navigation} />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}