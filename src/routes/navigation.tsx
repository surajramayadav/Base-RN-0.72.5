import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import HomeDrawer from './drawers/homeDrawer';


const Stack: any = createNativeStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                }} initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeDrawer} />
                <Stack.Screen name="Profile" component={Profile} />
                {/* <Stack.Screen name={NavigationType.Drawer} component={Drawer} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}