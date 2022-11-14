import { StyleSheet, Text, View } from 'react-native';
import Header from './ios/components/Header';
import HomeScreen from './ios/screens/HomeScreen';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  
  const client = new ApolloClient({
    uri: 'http://it2810-14.idi.ntnu.no:3001/songs',
    cache: new InMemoryCache()
  })

  const Stack = createStackNavigator();
  
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <HomeScreen/>
      </View>
    </ApolloProvider>
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
