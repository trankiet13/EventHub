import { View, Text, TextStyle, StyleProp } from 'react-native';
import React from 'react';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  title?: boolean;
  styles?: StyleProp<TextStyle>;
}
const TextComponent = (props: Props) => {
  const { text, size, flex, font, color, styles, title } = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ? size : title ? 24 : 14,
          fontFamily: font ? font : fontFamilies.regular,
        },
        styles,
      ]}
    >
      {' '}
      {text}
    </Text>
  );
};

export default TextComponent;
