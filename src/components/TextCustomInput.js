import React from "react";
import {View, StyleSheet, TextInput} from 'react-native';
import Color from '../layout/colors.js';
import VectorIcons from 'react-native-vector-icons/AntDesign';
class TextCustomInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        var {nameplaceholder} = this.props;
        return (
            <View>
                <View style={styles.inputtext}>
                    <VectorIcons 
                        name="rightcircleo" 
                        size={24} 
                        color={Color[Color.key].thirthcolor} 
                    />
                    <TextInput 
                        style={styles.textinputcolor} 
                        placeholder={nameplaceholder} 
                    />
                </View>
            </View>
        );
    }
}

export default TextCustomInput;