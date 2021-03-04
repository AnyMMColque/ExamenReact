import React from "react";
import {View, StyleSheet, TextInput} from 'react-native';
import Color from '../layout/colors.js';
import VectorIcons from 'react-native-vector-icons/AntDesign';
class TextCustomInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {
            placeholder, 
            iconname, 
            secureTextEntry, 
            keyboardType, 
            onChangeText
        } = this.props;
        var key = keyboardType;
        if (key == null){
            key = 'default';
        }
        return (
            <View>
                <View style={styles.inputtext}>
                    <VectorIcons 
                        name={iconname}
                        size={24} 
                        color={Color[Color.key].thirthcolor} 
                    />
                    <TextInput 
                        style={styles.textinputcolor} 
                        placeholder={placeholder} 
                        secureTextEntry={secureTextEntry}
                        keyboardType={key}
                        onChangeText={(text) => {
                            if (onChangeText !=null){
                                onChangeText(text);
                            }
                        }}
                    />
                </View>
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
    inputtext: {
        flexDirection: 'row',
        paddingLeft: 5,
        backgroundColor: Color[Color.key].secondColor,
        width: '90%',
        borderRadius: 10,
        elevation: 4,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    textinputcolor: {
        height: '100%',
        color: Color[Color.key].fourthColor,
    }
});
export default TextCustomInput;