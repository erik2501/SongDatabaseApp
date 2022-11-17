import { View } from "react-native";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { useRecoilState } from 'recoil';
import { orderAtom } from '../shared/globalState';
import { GET_DISTINCT_YEARS } from "../helpers/queries";
import { Text } from "react-native-elements";


const OrderSelect = () => {

    const [order, setOrder] = useRecoilState(orderAtom);

    //må se på offset men kommer an på hvordan paginering løses

    return(
        <View >
            <RNPickerSelect
                value = {order}
                placeholder={{ label: "Newest first", value: -1}}
                onValueChange={(value)  => setOrder(parseInt(value))}
                items={[
                    { label: "Oldest first", value: 0 },
                ]} 
                style={pickerSelectStyles}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});
export default OrderSelect;