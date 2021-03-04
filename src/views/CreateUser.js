import React from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
} from 'react-native';

import VectorIcons from 'react-native-vector-icons/AntDesign';
import TextCustomInput from '../components/TextCustomInput.js';
import Color from '../layout/colors.js';
class CreateUsers extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <TextCustomInput />
            </View>
        );         
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Color[Color.key].mainColor,
        alignItems: 'center',
    },
});
export default CreateUsers;