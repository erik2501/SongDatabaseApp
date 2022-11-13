import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './ios/components/Header';
import SearchbarComponent from './ios/components/SearchbarComponent';
import SongCard from './ios/components/SongCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchbarComponent value={'test'} />
      <SongCard></SongCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
