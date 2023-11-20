import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Profile from '../../screens/profile';


const Tab = createBottomTabNavigator();

export default function HomeTab() {
    return (
        <Tab.Navigator initialRouteName="HomeTab" screenOptions={{
            headerShown: false,

        }} >
            <Tab.Screen name="HomeTab" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),

                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="adduser" color={color} size={size} />
                    ),

                }} />


        </Tab.Navigator>

    )
}