import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components';
import { ArrowRight, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
  return (
    <ContainerComponent back isImageBackground>
        <SectionComponent>
            <TextComponent text="Reset Password" title></TextComponent>
            <TextComponent text="Please enter your email address to request a password reset"></TextComponent>
     <SpaceComponent height={26} />
            <InputComponent
            value={email}
            onChange={val => setEmail(val)}
                affix={<Sms size={22} color={appColors.gray} />}
                placeholder="abc@gmail.com"
            >
            </InputComponent>
        </SectionComponent>
        <SectionComponent>
            <ButtonComponent text="send" type="primary"
            icon={<ArrowRight size={20} color={appColors.white}/>} iconFlex='right'></ButtonComponent>
        </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPassword