import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_DISTINCT_YEARS } from "../helpers/queries";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  year: number,
  setYear: React.Dispatch<React.SetStateAction<number>>
}

const YearSelect = ({year, setYear}: IProps) => {

  const {data} = useQuery(GET_DISTINCT_YEARS);

  let items = [{ label: "All years", value: 0}]

  if (data){
    data.getDistinctYears.map((year : number) => {
      items.push({label: year.toString(), value: year})
    })
  }

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

export default YearSelect;