import Header from '../components/Header';
import SearchbarComponent from '../components/Searchbar';
import SongTableComponent from '../components/SongTable';


const HomeScreen = () => {

  return (
    <>
      <Header/>
      <SearchbarComponent/>
      <SongTableComponent/>
    </>
  );
}

export default HomeScreen;