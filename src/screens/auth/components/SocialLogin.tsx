import { View, Text } from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  TextComponent,
} from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { Google } from 'iconsax-react-native';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{ textAlign: 'center' }}
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      ></TextComponent>
      <ButtonComponent
        text="Login with Google"
        type="primary"
        color={appColors.white}
        icon={<Google size={24} color={appColors.primary}></Google>}
        iconFlex="left"
      ></ButtonComponent>
    </SectionComponent>
  );
};

export default SocialLogin;
