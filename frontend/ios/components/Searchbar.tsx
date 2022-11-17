import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SearchBar } from '@rneui/base';
import { useRecoilState } from 'recoil';
import { offsetAtom, searchWordAtom, yearAtom, orderAtom } from '../shared/globalState';
import YearSelect from "../components/YearSelect";
import OrderSelect from './OrderSelect';
import SwipeModal from './SwipeModal';

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
    const [animateModal, setAnimateModal] = useState(false);

    return (
        <View style={styles.filterbar}>

            <SwipeModal
                modalVisible={modalVisible}
                PressToanimate={animateModal}
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
            />

            <Pressable
                onPress={() => setModalVisible(true)}
                style={styles.filterbutton}
            >
                <Text style={styles.filterbuttonText}>Filters</Text>
            </Pressable>
        </View>
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
    header:{
        marginTop: 300,
        height: 30,
    },
    containerHeader: {
        flex: 1
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2
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
    },
    Modal: {
        backgroundColor: '#343242',
        paddingTop: 50,
        borderRadius: 25,
        marginTop: 300
    },
})

export default SearchbarComponent;