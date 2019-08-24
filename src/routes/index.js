import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from '../components/Login'
import Main from '../components/Main'
// import { Container } from './styles';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login, 
        Main
    })
)

export default Routes