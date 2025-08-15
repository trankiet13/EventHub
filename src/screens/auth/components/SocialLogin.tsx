import { View, Text } from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { Facebook, Google } from '../../../assets/svgs';

const SocialLogin = () => {
  return (
    <SectionComponent >
      <TextComponent
        styles={{ textAlign: 'center' }}
        text='OR'
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      ></TextComponent>
      <SpaceComponent height={25}></SpaceComponent>
      <ButtonComponent
        text="Login with Google"
        textColor={appColors.text}
        type="primary"
        color={appColors.white}
        iconFlex="left"
        icon={<Google />}
      ></ButtonComponent>
       <ButtonComponent
        text="Login with Facebook"
        textColor={appColors.text}
        type="primary"
        color={appColors.white}
        iconFlex="left"
        icon={<Facebook />}
      ></ButtonComponent>
    </SectionComponent>
  );
};

export default SocialLogin;
