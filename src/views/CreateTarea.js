import React from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
} from 'react-native';

import VectorIcons from 'react-native-vector-icons/AntDesign';
import CustomButtons from "../components/CustomButtons.js";
import TextCustomInput from '../components/TextCustomInput.js';
import Color from '../layout/colors.js';
import CustomButtons from '../components/CustomButtons.js';
import Request from '../server/Request.js';
import {CREATE_USER} from '../server/EndPoints.js';
class CreateTarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: null,
            repassword: null,
            age: 0,
        };
    }
    componentDidMount(){}
    registerData() {
        console.log(this.state);
        var req = new Request('post', CREATE_USER, this.state, (response) => {
            if (response.status == 200) {
                alert('usuario registrado');
            }
        });
        req.start();
    }
    render(){
        return(
            <View style={styles.container}>
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Nombre " 
                    onChangeText={(txt) => {
                        this.setState({
                            name: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Apellido" 
                    onChangeText={(txt) => {
                        this.setState({
                            lastname: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Email" 
                    onChangeText={(txt) => {
                        this.setState({
                            email: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Password" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                            password: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Re. Password" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                            repassword: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    keyboardType="numeric" 
                    placeholder="Edad" 
                    onChangeText={(txt) => {
                        this.setState({
                            age: txt,
                        });
                    }} 
                />
                <CustomButtons 
                    title="Crear Usuario" 
                    iconname="meh" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
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
export default CreateTarea;