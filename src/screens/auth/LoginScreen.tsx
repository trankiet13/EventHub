import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import { globalStyles } from '../../styles/globalStyles';
import { InputComponent } from '../../components';
import { Lock, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <InputComponent
        value={email}
        placeholder='Email'
        onChange={val => setEmail(val)}
        // isPassword
        allowClear
        
        affix={<Sms size={22} color={appColors.gray} />}
      ></InputComponent>
      <InputComponent
        value={password}
        placeholder='Password'
        onChange={val => setPassword(val)}
        // isPassword
        allowClear
        
        affix={<Lock size={22} color={appColors.gray} />}
      ></InputComponent>
    </View>
  );
};

export default LoginScreen;
