import React from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {DarkColors} from '../styles/DarkColors';
import {LightColors} from '../styles/LightColors';

// NAVIGATIONS
import SincStackScreens from './SincStackScreens';

export default function App() {
    const scheme = useColorScheme();

    return (
        <AppearanceProvider>
            <NavigationContainer
                theme={scheme === 'dark' ? DarkColors : LightColors}>
                <SincStackScreens />
            </NavigationContainer>
        </AppearanceProvider>
    );
}
