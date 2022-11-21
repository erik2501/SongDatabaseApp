import { StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRecoilValue } from 'recoil';
import { orientationAtom } from '../shared/globalState';


interface IProps {
  order: number,
  setOrder: React.Dispatch<React.SetStateAction<number>>
}

const OrderSelect = ({order, setOrder}: IProps) => {

  // const orientation = useRecoilValue(orientationAtom);

  const items = [
      { label: 'Newest first', value: -1 },
      { label: 'Oldest first', value: 0 },
  ]
  return (
    <Dropdown
        value={order}
        style={styles.dropdown}
        maxHeight={300}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
        itemContainerStyle={styles.containerStyle}
        iconStyle={styles.iconStyle}
        data={items}
        placeholder="Select item"
        labelField={'label'}
        valueField={'value'}
        onChange={(item)  => setOrder(parseInt(item.value))}
        renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="swap" size={20} />
        )}
    />
  );
};

export default OrderSelect;

const styles = StyleSheet.create({
containerStyle: {
  backgroundColor: 'white',
  borderColor: 'white'
},
dropdown: {
  height: 50,
  borderColor: 'black',
  borderWidth: 0,
  width: '100%',
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
  color: 'black',
  backgroundColor: 'black'
},
selectedTextStyle: {
  fontSize: 16,
  color: 'lightgrey'
  // color: '#86939E',
  //backgroundColor: '#2F3337'
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
  color: 'black'
},
});
