import React from 'react';
import { SafeAreaView, Dimensions } from "react-native";
import SongTable from '../components/SongTable';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../helpers/types";
import SearchbarComponent from "../components/Searchbar";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useSetRecoilState } from 'recoil';
import { orientationAtom } from '../shared/globalState';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, "Home">
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {

  // Function that returns true if the screen is in portrait mode, and false if in landscape mode
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const setOrientation = useSetRecoilState(orientationAtom);

  // EventListener that updates the orientationAtom when phone-orientation is changed
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

export default HomeScreen;