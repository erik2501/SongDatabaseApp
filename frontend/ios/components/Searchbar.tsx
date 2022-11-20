import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRecoilState } from 'recoil';
import { searchWordAtom, yearAtom, orderAtom } from '../shared/globalState';
import { SearchBar, Button } from '@rneui/base';
import YearSelect from "../components/YearSelect";
import OrderSelect from './OrderSelect';
import Icon from 'react-native-vector-icons/AntDesign';


const SearchbarComponent = () => {

    const [searchWord, setSearchWord] = useRecoilState(searchWordAtom);
    const [year, setYear] = useRecoilState(yearAtom);
    const [order, setOrder] = useRecoilState(orderAtom);


    const [searchWordLocal, setSearchWordLocal] = useState<string>(searchWord);
    const [yearLocal, setYearLocal] = useState<number>(year);
    const [orderLocal, setOrderLocal] = useState<number>(order);


    const handleSearch = (value: string) => {
        setSearchWordLocal(value);
    }

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['65%', '90%'], []);

    const handleSheetChanges = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);

    const submitFilters = () => {
        if (searchWord !== searchWordLocal) setSearchWord(searchWordLocal);
        if (order !== orderLocal) setOrder(orderLocal);
        if (year !== yearLocal) setYear(yearLocal);
    }

    const clearSearch = () => {
        setSearchWord('');
        setSearchWordLocal('');
    }

    const clearYearFilter = () => {
        setYear(0);
        setYearLocal(0);
    }


    return (
        <View style={styles.filterbar}>
            <Button
                onPress={handlePresentModalPress}
                buttonStyle={styles.filterbutton}
            >
                <Text style={styles.filterbarText}>Filters</Text>
            </Button>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {year !== 0 ? 
                <View style={styles.filterbox}>
                    <Text style={styles.filterbarText}>Year: {year}</Text>
                    <TouchableOpacity onPress={clearYearFilter}>
                        <Icon name={'closecircle'} color={'grey'} size={20} />
                    </TouchableOpacity>
                </View> 
                : 
                undefined}

                { searchWord !== '' ?
                <View style={styles.filterbox}>
                    <Text style={styles.filterbarText}>Search: {searchWord}</Text>
                    <TouchableOpacity onPress={clearSearch}>
                        <Icon name={'closecircle'} color={'grey'} size={20} />
                    </TouchableOpacity>
                </View>
                : undefined}
            </ScrollView>

            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                backgroundStyle={styles.modal}
                enablePanDownToClose={true}
                index={0}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.modalText}>Filters and sorting</Text>
                    <SearchBar
                        containerStyle={styles.searchField}
                        inputContainerStyle={{backgroundColor: '#595959', borderRadius: 13}}
                        inputStyle={{ color: 'lightgrey'}}
                        labelStyle={{color:'lightgrey'}}
                        // placeholderTextColor='lightgrey'
                        placeholder="Search for a song or an artist"
                        onChangeText={(text) => handleSearch(text)}
                        value={searchWordLocal}
                    />
                    <YearSelect year={yearLocal} setYear={setYearLocal}/>
                    <OrderSelect order={orderLocal} setOrder={setOrderLocal}/>
                    <Button style={{ marginTop: 30 }} onPress={submitFilters}>
                        Use filters
                    </Button>
                </View>
            </BottomSheetModal>
        </View>
    )
}

const styles = StyleSheet.create({
    // For the top bar
    filterbar: {
        backgroundColor: '#222831',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8
    },
    filterbutton: {
        height: 40,
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.2,
        borderRadius: 8,
        borderColor: '#5a5963',
        borderStyle: 'solid',
        color: 'lightgrey'
    },
    filterbox: {
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 8,
        backgroundColor: '#0060ba',
        color: 'grey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    filterbarText: {
        color: 'lightgrey',
        marginRight: 5
    },
    // For the modal
    modal: {
        backgroundColor: '#222831'//'#343242'
    },
    contentContainer: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        width: '85%',
        alignSelf: 'center'
    },
    modalText: {
        color: '#d2d2d6',
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 20
    },
    searchField: { 
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        width: '100%',
        padding: 0,
        color: 'lightgrey'
    },
})

export default SearchbarComponent;
