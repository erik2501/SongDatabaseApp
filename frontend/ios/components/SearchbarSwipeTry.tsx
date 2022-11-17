import { StyleSheet } from 'react-native';

const SearchbarWipeTry = () => {
    return (
        {}
        // <SwipeUpDownModal
        //             modalVisible={modalVisible}
        //             PressToanimate={animateModal}
        //             //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
        //             HeaderContent={
        //                 <View style={styles.containerHeader}> 
        //                     <View style={styles.line}/>
        //                 </View>
        //             }
        //             HeaderStyle={styles.header}

        //             ContentModal={
        //                 <View style={styles.containerContent}>
        //                     <Text style={styles.modalText}>Filters and sorting</Text>
        //                     <SearchBar
        //                         style={styles.searchbar}
        //                         placeholder="Search for a song or an artist"
        //                         onChangeText={(text) => handleSearch(text)}
        //                         value={searchWord}
        //                     />
        //                 </View>
        //             }
        //             ContentModalStyle={styles.Modal}

        //             onClose={() => {
        //                 setModalVisible(false);
        //                 setAnimateModal(false);
        //             }}
        //         />







        // <GestureRecognizer
        //             style={{flex: 1}}
        //             onSwipeDown={ () => setModalVisible(false) }
        //         >
        //             <Modal
        //                 transparent={true}
        //                 visible={modalVisible}
        //                 animationType='slide'
        //                 // presentationStyle="pageSheet"
        //             >
        //                     <View style={styles.modalView}>
        //                         <Text style={styles.modalText}>Filters and sorting</Text>
        //                         <View style={{width: '80%'}}>
        //                             <SearchBar
        //                                 placeholder="Type Here..."
        //                                 onChangeText={(text) => handleSearch(text)}
        //                                 value={searchWord}
        //                             />
        //                             <YearSelect/>
        //                             <OrderSelect/>
        //                         </View>
                                
        //                         <Button
        //                             onPress={() => setModalVisible(!modalVisible)}
        //                             color={'#2196F3'}
        //                             title={'Close Modal'}
        //                         />
        //                     </View>
        //             </Modal>
        //         </GestureRecognizer>

    )
}



const styles = StyleSheet.create({
    
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


export {};