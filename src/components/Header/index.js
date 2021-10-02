import React from 'react'

import { Feather } from '@expo/vector-icons';

import { Container, ManuButton, Title } from './styles';
import {useNavigation } from '@react-navigation/native';

function Header({ title }) {

    const navigation = useNavigation();

    return (
       <Container>
           <ManuButton onPress={() => navigation.openDrawer()} >
               <Feather name="menu" size={36} color="#FFF" />
           </ManuButton>
           <Title>{title}</Title>
       </Container>
    );
}

export default Header;