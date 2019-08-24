import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, Platform } from 'react-native';
import api from '../../services/index';
import logo from '../../assets/logo.png';
import { Container, Input, Button, Text } from './styles';

export default function Loin({ navigation }) {
    const [user, setUser] = useState('')
    useEffect(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) {
          navigation.navigate('Main', { user })
        }
      })
    }, []);

    async function handleLogin () {
      try {
        const response = await api.post('/devs', {username: user})
        const { _id } = response.data
        await AsyncStorage.setItem('user', _id)
        navigation.navigate('Main', { _id })
      } catch (error) {
        alert('Erro ao fazer Login')
      }
    }
  return (
      <Container
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        >
        <Container>
            <Image source={logo} />
           <Input 
             placeholder="Digite seu usuário no Github"
             placeholderTextColor="#999"
             autoCapitalize="none"
             placeholderFontSize="8px"
             value={user}
             onChangeText={setUser}
           />
           <Button onPress={handleLogin} >
               <Text>Login</Text>
           </Button>
        </Container>
    </Container>
  );
}
