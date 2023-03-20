import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';
import Notifications from '../../screen/Notifications';
import EditSaveScreen from '../../screen/EditSaveScreen';
import RankWinningScreen from '../../screen/RankWinningScreen';

const Stack = createNativeStackNavigator();
function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="EditSaveScreen"
                component={EditSaveScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RankWinningScreen"
                component={RankWinningScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default AuthStack;
