import React, { useState } from 'react';
import { Text, Modal, StyleSheet, Pressable, View, Button   } from 'react-native';
import { SearchBar } from '@rneui/base';
import { useRecoilState } from 'recoil';
import { offsetAtom, searchWordAtom, yearAtom, orderAtom } from '../shared/globalState';
//import BottomSheet from './BottomSheet';
import GestureRecognizer from 'react-native-swipe-gestures';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
// import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import YearSelect from "../components/YearSelect";
import OrderSelect from './OrderSelect';


// const SearchbarComponent = () => {
//     return (
//         <GestureHandlerRootView style={{flex: 1}}>
//             <View style={styles.container}>
//                 <StatusBar style='light'/>
//                 <BottomSheet></BottomSheet>
//             </View>
//         </GestureHandlerRootView>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#111',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

const SearchbarComponent = () => {

    const [searchWord, setSearchWord] = useRecoilState(searchWordAtom);
    const [offset, setOffset] = useRecoilState(offsetAtom);
    const [year, setYear] = useRecoilState(yearAtom);
    const [order, setOrder] = useRecoilState(orderAtom);


    const handleSearch = (value: string) => {
        setSearchWord(value);
        setOffset(0);
    }

    const [modalVisible, setModalVisible] = useState(false);

    let [animateModal, setAnimateModal] = useState(false);

    return (
        <>
            <View style={styles.filterbar}>

                <GestureRecognizer
                    style={{flex: 1}}
                    onSwipeDown={ () => setModalVisible(false) }
                >
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        animationType='slide'
                        // presentationStyle="pageSheet"
                    >
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Filters and sorting</Text>
                                <View style={{width: '80%'}}>
                                    <SearchBar
                                        placeholder="Type Here..."
                                        onChangeText={(text) => handleSearch(text)}
                                        value={searchWord}
                                    />
                                    <YearSelect/>
                                    <OrderSelect/>
                                </View>
                                
                                <Button
                                    onPress={() => setModalVisible(!modalVisible)}
                                    color={'#2196F3'}
                                    title={'Close Modal'}
                                />
                            </View>
                    </Modal>

                </GestureRecognizer>

                {/* <SwipeUpDownModal
                    modalVisible={modalVisible}
                    PressToanimate={animateModal}
                    //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
                    HeaderContent={
                        <View style={styles.containerHeader}> 
                            <View style={styles.line}/>
                        </View>
                    }
                    HeaderStyle={styles.header}

                    ContentModal={
                        <View style={styles.containerContent}>
                            <Text style={styles.modalText}>Filters and sorting</Text>
                            <SearchBar
                                style={styles.searchbar}
                                placeholder="Search for a song or an artist"
                                onChangeText={(text) => handleSearch(text)}
                                value={searchWord}
                            />
                        </View>
                    }
                    ContentModalStyle={styles.Modal}

                    onClose={() => {
                        setModalVisible(false);
                        setAnimateModal(false);
                    }}
                /> */}
                

                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={styles.filterbutton}
                >
                    <Text style={styles.filterbuttonText}>Filters</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    filterbar: {
        backgroundColor: '#222831',
        display: 'flex',
        justifyContent: 'center',
        padding: 8
    },
    filterbutton: {
        height: 35,
        width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.2,
        borderRadius: 8,
        borderColor: '#5a5963',
        borderStyle: 'solid'
    },
    filterbuttonText: {
        color: 'white'
    },
    modalView: {
        height: '50%',
        width: '100%',
        marginTop: 'auto',
        backgroundColor:'grey',
        borderRadius: 20,
        // padding: 35,
        alignItems: "center"
    },
    searchbar: {
        width: '80%',
        border: 'hidden',
        borderRadius: 15
    },
    
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2
    },
    header:{
        marginTop: 300,
        height: 30,
    },
    containerHeader: {
        flex: 1
    },
    Modal: {
        backgroundColor: '#343242',
        paddingTop: 50,
        borderRadius: 25,
        marginTop: 300
    },
    containerContent: {
        height: '100%',
        alignSelf: 'center',
        display: 'flex',
        width: '90%'
    },
    modalText: {
        color: '#d2d2d6',
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 20
    }
  });

export default SearchbarComponent;