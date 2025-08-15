import { View, Text, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import { globalStyles } from '../../styles/globalStyles';
import {
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { Lock, Sms, User } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import ContainerComponent from '../../components/ContainerComponent';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './components/SocialLogin';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUpScreen = ( {navigation} : any) => {
  const [values, setValues] = useState(initValue);
  const handleChangeValue = (key: string, valye:string) => {
    const data : any = {...values};
    data[key] = valye;
    setValues(data);
  }
  return (
    <ContainerComponent isImageBackground isScroll back >
    
      <SectionComponent>
        <TextComponent title size={24} text="Sign up"></TextComponent>
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          placeholder="Full name"
          onChange={val => handleChangeValue('username', val)}
          allowClear
          affix={<User size={22} color={appColors.gray} />}
        ></InputComponent>
        <InputComponent
          value={values.email}
          placeholder="abc@gmail.com"
          onChange={val => handleChangeValue('email', val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        ></InputComponent>
        <InputComponent
          value={values.password}
          placeholder="Password"
          onChange={val => handleChangeValue('password', val)}
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
          isPassword
        ></InputComponent>
        <InputComponent
          value={values.confirmPassword}
          placeholder="Confirm password"
          onChange={val => handleChangeValue('ConfiemPassword', val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        ></InputComponent>
        {/* <InputComponent
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          // isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        ></InputComponent> */}
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent >
        <ButtonComponent text="SIGN UP" type="primary"></ButtonComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account?"></TextComponent>
          <ButtonComponent type="link" text="Sign up" onPress={ () => navigation.navigate('LoginScreen') }></ButtonComponent>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
