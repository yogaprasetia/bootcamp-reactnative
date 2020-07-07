import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default function AboutScreen() {

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 15, fontSize: 30, color: "#003366", marginTop: 0, fontWeight: "bold" }}>Tentang Saya</Text>
            <Image source={require('./images/profilepic.jpg')} style={{ width: 100, height: 100, borderRadius: 300, marginTop: 10 }} />
            <Text style={{ marginTop: 15, fontSize: 25, color: "#003366", fontWeight: 'bold' }}>Yoga Prasetia</Text>
            <Text style={{ marginTop: 5, fontSize: 15, color: "#3EC6FF" }}>React Native Developer</Text>
            <View style={styles.portofolio}>
                <Text style={{ borderBottomWidth: 1, paddingLeft: 5 }}>Portofolio</Text>
                <View style={styles.listPortofolio}>
                    <View style={styles.detailPortofolio}>
                        <AntDesign name="github" size={34} color="#003366" />
                        <Text style={{ marginLeft: 10 }}>yogaprasetia</Text>
                    </View>
                    <View style={styles.detailPortofolio}>
                        <AntDesign name="gitlab" size={34} color="#003366" />
                        <Text style={{ marginLeft: 10 }}>yogaprasetia</Text>
                    </View>
                </View>
            </View>
            <View style={styles.kontak}>
                <Text style={{ borderBottomWidth: 1, paddingLeft: 5, marginBottom: 5 }}>Hubungi Saya</Text>
                <View style={styles.listKontak}>
                    <View style={styles.detailKontak}>
                        <FontAwesome name="facebook-square" size={34} color="#003366" />
                        <Text style={{ marginLeft: 10 }}>yogaprasetiia</Text>
                    </View>
                    <View style={styles.detailKontak}>
                        <AntDesign name="instagram" size={34} color="#003366" />
                        <Text style={{ marginLeft: 10 }}>yog4p</Text>
                    </View>
                    <View style={styles.detailKontak}>
                        <AntDesign name="twitter" size={34} color="#003366" />
                        <Text style={{ marginLeft: 10 }}>yogaprz</Text>
                    </View>
                </View>
            </View>
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
    portofolio: {
        display: 'flex',
        backgroundColor: "#EFEFEF",
        height: 100,
        width: 320,
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 10
    },
    kontak: {
        display: 'flex',
        backgroundColor: "#EFEFEF",
        height: 160,
        width: 320,
        borderRadius: 20
    },
    listKontak: {
        display: 'flex',
        alignItems: 'center',
    },
    detailKontak: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5
    },
    detailPortofolio: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10
    },
    listPortofolio: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
