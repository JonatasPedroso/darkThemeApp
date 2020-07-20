import {DarkTheme} from '@react-navigation/native';

export const DarkColors = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        // COLORS
        primary: '#3377FF',
        secondary: '#44BBFF',
        success: '#11EE66',
        warning: '#FFDD44',
        danger: '#FF5566',

        // TEXT
        textPrimary: '#E4E6EB',
        textSecondary: '#B0B3B8',
        textButton: '#FFFFFF',

        // BACKGROUND
        backgroundPrimary: '#1C1E21',
        backgroundSecondary: '#242526',
        backgroundTertiary: '#3A3B3C',
    },
};
