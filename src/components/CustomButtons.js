import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import VectorIcons from 'react-native-vector-icons/AntDesign';
import Color from '../layout/colors.js';
class CustomButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {title, iconname} = this.props;
        var icon = iconname;
        if (icon == null) {
            icon = 'check';
        }
        return (
            <TouchableOpacity 
                style={styles.btnstyles}
                onPress={() => {
                    onPress();
                }}>
                <VectorIcons 
                    name={icon} 
                    size={24} 
                    color={Color[Color.key].fourthcolor} 
                />
                <Text style={styles.txt}>{title} </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create[{
    btnstyles: {
        backgroundColor: Color[Color.key].thirthcolor,
        flexDirection: 'row',
        padding: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: Color[Color.key].fourthcolor,
        marginLeft: 10,
    }
}];
export default CustomButtons;