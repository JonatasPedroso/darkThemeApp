import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

import SincContainer from '../../components/SincContainer';

export default function Home() {
    const {colors} = useTheme();

    return (
        <SincContainer>
            <CustomText colors={colors}>
                Teste de Aplicação com React Navigation 5
            </CustomText>
            <CustomButton
                title="Press Me"
                colors={colors}
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </SincContainer>
    );
}

const CustomText = styled.Text`
    color: ${(props) => props.colors.textPrimary};
`;

const CustomButton = styled.Button`
    background-color: ${(props) => props.colors.primary};
    color: ${(props) => props.colors.textButton};
`;
