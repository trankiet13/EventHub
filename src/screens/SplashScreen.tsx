import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { appInfo} from '../constants/appinfor'
import { SpaceComponent } from '../components'
import { appColors } from '../constants/appColors'


const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/splash-screen.png')}
    style={{
      flex: 1,
      justifyContent : 'center',
      alignItems : 'center',
    }}
    imageStyle={{flex:1}}>
      <Image source={require('../assets/images/logo.png')}
      style={{
        width: appInfo.sizes.WIDTH * 0.7,
        resizeMode: 'contain',
      }}></Image>
<SpaceComponent height={20}></SpaceComponent>
<ActivityIndicator color={appColors.gray} size={22}></ActivityIndicator>
    </ImageBackground>
  )
}

export default SplashScreen