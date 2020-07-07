import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import SkillScreen from './SkillScreen';

export default function LoginScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={require('./images/logo-sanber.png')} style={{ width: 300, height: 100, marginTop: -100 }} />
            <Text style={{ marginTop: 15, fontSize: 25 }}>Login</Text>
            <View style={styles.inputText}>
                <MaterialIcons style={{ marginRight: 5 }} name="email" size={24} color="black" />
                <TextInput placeholder="Enter user / email" style={{ fontSize: 13 }}></TextInput>
            </View>
            <View style={styles.inputText}>
                <MaterialIcons style={{ marginRight: 5 }} name="lock" size={24} color="black" />
                <TextInput placeholder="Enter password" style={{ fontSize: 13 }}></TextInput>
            </View>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.push('DrawerScreen')}>
                <Text style={{ color: "white"}}>Masuk</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 15 }}>
                <Text>Atau</Text>
            </View>
            <TouchableOpacity style={styles.button2}>
                <Text style={{ color: "white"}}>Daftar ?</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    text: {
        fontSize: 30, color: '#04063c'
    },
    inputText: {
        marginTop: 20,
        width: 200,
        height: 30,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#003366",
        flexDirection: "row"
    },
    button1: {
        marginTop: 20,
        height: 30,
        alignItems: 'center',
        backgroundColor: "#3EC6FF",
        paddingHorizontal: 25,
        paddingVertical: 5, 
        borderRadius: 200
    },
    button2: {
        marginTop: 15,
        height: 30,
        alignItems: 'center',
        backgroundColor: "#003366",
        paddingHorizontal: 25, 
        paddingVertical: 5, 
        borderRadius: 200
    }
});
