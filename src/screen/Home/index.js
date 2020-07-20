import React from 'react';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';

import SincContainer from '../../components/SincContainer';

export default function Home() {
    const {colors} = useTheme();

    return (
        <SincContainer>
            <CustomText colors={colors}>Teste de Aplicação com React Navigation 5</CustomText>
        </SincContainer>
    );
}

const CustomText = styled.Text`
    color: ${(props) => props.colors.textPrimary};
`;
