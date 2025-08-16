import { View, Text, Image, Switch, Alert } from 'react-native';
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
import { Lock, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import ContainerComponent from '../../components/ContainerComponent';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authApi';
import { Validate } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembered, setIsRemembered] = useState(true);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const emailValidation = Validate.email(email);
    if (emailValidation) {
      try {
        const res = await authenticationAPI.HandleAuthentication(
          'login',
          { email, password },
          'post',
        );
        dispatch(addAuth(res.data));

        await AsyncStorage.setItem(
          'auth',
          isRemembered ? JSON.stringify(res.data) : email,
        );

        console.log(res);
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert('Error is not correct');
    }
  };
  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}
      >
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 100,
            height: 100,
            marginBottom: 30,
          }}
        ></Image>
      </SectionComponent>
      <SectionComponent>
        <TextComponent title size={24} text="Sign in"></TextComponent>
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder="Email"
          onChange={val => setEmail(val)}
          // isPassword
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        ></InputComponent>
        <InputComponent
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          // isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        ></InputComponent>
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemembered(!isRemembered)}>
            <Switch
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              value={isRemembered}
              onChange={() => setIsRemembered(!isRemembered)}
            ></Switch>
            <TextComponent text="Remember me"></TextComponent>
          </RowComponent>
          <ButtonComponent
            text="Forget Password? "
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
            type="text"
          ></ButtonComponent>
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          text="SIGN IN"
          type="primary"
          onPress={handleLogin}
        ></ButtonComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don't have an account? "></TextComponent>
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          ></ButtonComponent>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
