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
            description: '',
            date: '',
            hour: null,
            done: null,
        };
    }
    componentDidMount(){}
    registerData() {
        console.log(this.state);
        var req = new Request('post', CREATE_USER, this.state, (response) => {
            if (response.status == 200) {
                alert('Tarea agregada');
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
                    placeholder="Descripción" 
                    onChangeText={(txt) => {
                        this.setState({
                            description: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Fecha" 
                    onChangeText={(txt) => {
                        this.setState({
                            date: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Hora" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                            hour: txt,
                        });
                    }} 
                />
                <TextCustomInput 
                    iconname="customerservice" 
                    placeholder="Done" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                            done: txt,
                        });
                    }} 
                />
                <CustomButtons 
                    title="Agregar Tarea" 
                    iconname="documents" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <CustomButtons 
                    title="Borrar Tarea" 
                    iconname="trash" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <CustomButtons 
                    title="Actualizar Tarea" 
                    iconname="back-in-time" 
                    onPress={() => {
                        this.registerData();
                    }} 
                />
                <CustomButtons 
                    title="Actualizar Done" 
                    iconname="refresh" 
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