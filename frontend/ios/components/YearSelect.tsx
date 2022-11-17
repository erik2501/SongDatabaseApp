import { View } from "react-native";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { useRecoilState } from 'recoil';
import { yearAtom } from '../shared/globalState';
import { GET_DISTINCT_YEARS } from "../helpers/queries";

const YearSelect = () => {

    const [year, setYear] = useRecoilState(yearAtom);

    const {data} = useQuery(GET_DISTINCT_YEARS);
    
 /*
    //console.log(data.getDistinctYears)

    const item = data.getDistinctYears.map((year : number) => (
        {
           label: year,
           value: year,
        }))

    console.log(item)

    const range = (start : number, end : number) => Array.from(Array(end - start + 1).keys()).map(x => x + start);      

    const years = range(1999,2020)

                items={data.getDistinctYears.map((year : number, year1 : string) => (
                    {
                       label: year1,
                       value: year,
                    }))}

            items= {item}
*/    


    return (
        <View >
            <RNPickerSelect
                value={year}
                placeholder={{ label: "Select year", value: 0 }}
                onValueChange={(value)  => setYear(parseInt(value))}
                items={[
                    { label: "1999", value: 1999, key: 1999 },
                    { label: "2000", value: 2000, key: 2000 },
                    { label: "2001", value: 2001, key: 2001 },
                    { label: "2002", value: 2002, key: 2002 },
                    { label: "2003", value: 2003, key: 2003 },
                    { label: "2004", value: 2004, key: 2004 },
                    { label: "2005", value: 2005, key: 2005 },
                    { label: "2006", value: 2006, key: 2006 },
                    { label: "2007", value: 2007, key: 2007 },
                    { label: "2008", value: 2008, key: 2008 },
                    { label: "2009", value: 2009, key: 2009 },
                    { label: "2010", value: 2010, key: 2010 },
                    { label: "2011", value: 2011, key: 2011 },
                    { label: "2012", value: 2012, key: 2012 },
                    { label: "2013", value: 2013, key: 2013 },                        
                    { label: "2014", value: 2014, key: 2014 },
                    { label: "2015", value: 2015, key: 2015 },                        
                    { label: "2016", value: 2016, key: 2016 },
                    { label: "2017", value: 2017, key: 2017 },
                    { label: "2018", value: 2018, key: 2018 },
                    { label: "2019", value: 2019, key: 2019 },
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
export default YearSelect;