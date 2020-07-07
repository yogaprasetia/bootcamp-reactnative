import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Entypo } from '@expo/vector-icons';

export default function SkillCard(props) {

    return (
        < View style={styles.skillContainer}>
            <Icon name={props.skill.item.iconName} size={80} color="#003366"></Icon>
            <View style={styles.skillDetail}>
                <Text style={{ color: "#003366", fontWeight: 'bold', fontSize: 24 }}>{props.skill.item.skillName}</Text>
                <Text style={{ color: "#3EC6FF", fontSize: 16 }}>{props.skill.item.categoryName}</Text>
                <Text style={{ fontSize: 48, color: 'white', alignSelf: 'flex-end', fontWeight: 'bold', marginTop: -10 }}>{props.skill.item.percentageProgress}</Text>
            </View>
            <Entypo name="chevron-right" size={80} color="#003366" />
        </View>
    )
}

const styles = StyleSheet.create({
    skillContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#B4E9FF",
        elevation: 5,
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 10
    },
    skillDetail: {
        display: 'flex',
        alignItems: 'flex-start'
    }
})