import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../screens/profile';
import HomeTab from '../tabs/homeTab';

const DrawerApp = createDrawerNavigator();
export default function HomeDrawer() {
    return (
        // <Drawer.Navigator
        //     initialRouteName="BottomTabs"
        //     screenOptions={{ headerShown: false }}
        //     drawerContent={props => <CustomDrawerContent {...props} />}>
        //     <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        //     {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        // </Drawer.Navigator>
        <DrawerApp.Navigator initialRouteName="HomeDrawer" >
            <DrawerApp.Screen name="HomeDrawer" component={HomeTab} />
            <DrawerApp.Screen name="ProfileDrawer" component={Profile} />
        </DrawerApp.Navigator>
    );
}