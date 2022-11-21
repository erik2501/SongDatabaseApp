import { StyleSheet } from 'react-native';
import HomeScreen from './ios/screens/HomeScreen';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SongScreen from './ios/screens/SongScreen';
import { RootStackParamList } from './ios/helpers/types';

export default function App() {

  const client = new ApolloClient({
    uri: 'http://it2810-14.idi.ntnu.no:3001/songs',
    cache: new InMemoryCache()
  })

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Stack.Navigator initialRouteName='Home' screenOptions={() => ({headerStyle: {backgroundColor: 'red'}})}>
            <Stack.Screen name='Home' component={HomeScreen}
              options={{
                title: 'IMDB - International Music DataBase',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerText
              }} />
            <Stack.Screen name='SongScreen' component={SongScreen}
              options={{
                title: 'IMDB',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerText
              }}
              initialParams={{ songID: 0 }}

            />
          </Stack.Navigator>
        </ApolloProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222831',
    borderWidth: 0,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'lightgrey'
  }
});
