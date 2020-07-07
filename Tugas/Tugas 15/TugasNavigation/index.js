import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AboutScreen from './AboutScreen'
import AddScreen from './AddScreen'
import LoginScreen from './LoginScreen'
import ProjectScreen from './ProjectScreen'
import SkillScreen from './SkillScreen'
import RegisterScreen from "../Tugas 13/RegisterScreen";

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="SkillScreen" component={SkillScreen} />
        <Tabs.Screen name="ProjectScreen" component={ProjectScreen} />
        <Tabs.Screen name="AddScreen" component={AddScreen} />
    </Tabs.Navigator>
)

const DrawerScreen = () => (
    <Drawer.Navigator screenOptions={{header: () => null}}>
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login Screen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}