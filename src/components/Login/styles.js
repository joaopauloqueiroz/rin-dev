import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content:center;
    align-items: center;
    background-color: #F5F5f5;
    padding: 30px;
`;

export const Input = styled.TextInput `
    height: 46px;
    align-self: stretch;
    border-width: 1px;
    background-color: #FFF;
    border-radius: 4px;
    margin-top: 20px;
    border-color: #ddd;
    min-width: 250px;
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    font-family: 'Roboto, sans-serif';
`;

export const Button = styled.TouchableOpacity `
    height: 46px;
    border-width: 1px;
    margin-top: 10px;
    border-radius: 4px;
    background-color: #DF4723;
    color: #fff;
    border-color: #ddd;
    justify-content: center;
    align-items: center;
    min-width: 90;
`;

export const Text = styled.Text `
    color: #FFF;
    font-weight: bold;
    font-family: 'Roboto, sans-serif';
    font-size: 16;
`;