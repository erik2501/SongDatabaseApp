import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRecoilState } from 'recoil';
import { searchWordAtom, yearAtom, orderAtom } from '../shared/globalState';
import { SearchBar, Button } from '@rneui/base';
import YearSelect from "../components/YearSelect";
import OrderSelect from './OrderSelect';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { orientationAtom } from '../shared/globalState';


const SearchbarComponent = () => {

    const [searchWord, setSearchWord] = useRecoilState(searchWordAtom);
    const [year, setYear] = useRecoilState(yearAtom);
    const [order, setOrder] = useRecoilState(orderAtom);


    const [searchWordLocal, setSearchWordLocal] = useState<string>(searchWord);
    const [yearLocal, setYearLocal] = useState<number>(year);
    const [orderLocal, setOrderLocal] = useState<number>(order);


    const orientation = useRecoilValue(orientationAtom);


    const handleSearch = (value: string) => {
        setSearchWordLocal(value);
    }

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['65%', '95%'], []);

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
                index={ orientation ? 0 : 1}
                onChange={handleSheetChanges}
            >
                <Text style={styles.modalText}>Filters and sorting</Text>
                <View style={[{ display: 'flex'}, orientation ? { flexDirection: 'column' } : { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }]}>
                    <View style={orientation ? styles.contentContainer : styles.contentLandscape}>
                        <SearchBar
                            containerStyle={styles.searchField}
                            inputContainerStyle={{ backgroundColor: '#595959', borderRadius: 13 }}
                            inputStyle={{ color: 'lightgrey'}}
                            labelStyle={{ color:'lightgrey' }}
                            placeholder="Search for a song or an artist"
                            onChangeText={(text) => handleSearch(text)}
                            value={searchWordLocal}
                        />
                        <YearSelect year={yearLocal} setYear={setYearLocal}/>
                        <OrderSelect order={orderLocal} setOrder={setOrderLocal}/>
                    </View>
                    <Button 
                        buttonStyle={{
                            backgroundColor: '#89b9cc',
                            borderRadius: 3,
                            width: 120,
                            alignSelf:'center',
                        }}
                        onPress={submitFilters}
                    >
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
        padding: 8,
        borderTopWidth: 0.2,
        borderTopColor: '#525c69',
        borderBottomWidth: 0.2,
        borderBottomColor: '#525c69'
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
        color: 'lightgrey',
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
        backgroundColor: '#343242',//'#343242' // '#475a73'
    },
    contentContainer: {
        height: 230,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '85%',
        alignSelf: 'center',
    },
    contentLandscape: {
        height: 230,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '50%',
        marginLeft: 60
    },
    modalText: {
        color: '#d2d2d6',
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 20
    },
    searchField: { 
        height: 50,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        padding: 0,
        color: 'lightgrey'
    },
})

export default SearchbarComponent;
