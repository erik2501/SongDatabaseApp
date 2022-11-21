import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_DISTINCT_YEARS } from "../helpers/queries";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { orientationAtom } from '../shared/globalState';

interface IProps {
  year: number,
  setYear: React.Dispatch<React.SetStateAction<number>>
}

const YearSelect = ({year, setYear}: IProps) => {

  // const orientation = useRecoilValue(orientationAtom);

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
    const items = [        
        { label: "All years", value: 0},            
        { label: "1999", value: 1999 },
        { label: "2000", value: 2000 },
        { label: "2001", value: 2001 },
        { label: "2002", value: 2002 },
        { label: "2003", value: 2003 },
        { label: "2004", value: 2004 },
        { label: "2005", value: 2005 },
        { label: "2006", value: 2006 },
        { label: "2007", value: 2007 },
        { label: "2008", value: 2008 },
        { label: "2009", value: 2009 },
        { label: "2010", value: 2010 },
        { label: "2011", value: 2011 },
        { label: "2012", value: 2012 },
        { label: "2013", value: 2013 },                        
        { label: "2014", value: 2014 },
        { label: "2015", value: 2015 },                        
        { label: "2016", value: 2016 },
        { label: "2017", value: 2017 },
        { label: "2018", value: 2018 },
        { label: "2019", value: 2019 },]


        return (
            <Dropdown
                value={year}
                style={styles.dropdown}
                maxHeight={200}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemContainerStyle={styles.containerStyle}
                containerStyle={styles.containerStyle}
                itemTextStyle={styles.itemTextStyle}
                iconStyle={styles.iconStyle}
                data={items}
                placeholder="Select item"
                labelField={'label'}
                valueField={'value'}
                onChange={(item)  => setYear(parseInt(item.value))}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="calendar" size={20} />
                )}
            />
          );
        };

export default YearSelect;

const styles = StyleSheet.create({
  containerStyle: {
      backgroundColor: '#fff',
      borderColor: 'black',
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 13,
    backgroundColor: '#595959',
    padding: 10
  },
  icon: {
    marginRight: 5,
    color: '#86939E'
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'lightgrey'
  },
  itemTextStyle: {
    fontSize: 16,
    color: '#86939E'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
