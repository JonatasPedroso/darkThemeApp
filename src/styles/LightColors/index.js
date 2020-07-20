import {DefaultTheme} from '@react-navigation/native';

export const LightColors = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        // COLORS
        primary: '#0055FF',
        secondary: '#0099FF',
        success: '#05DD66',
        warning: '#FFCC00',
        danger: '#FF3333',

        // TEXT
        textPrimary: '#050505',
        textSecondary: '#65676B',
        textButton: '#FFFFFF',

        // BACKGROUND
        backgroundPrimary: '#F0F2F5',
        backgroundSecondary: '#FFFFFF',
        backgroundTertiary: '#F0F2F5',
    },
};
