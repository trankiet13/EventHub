import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import React, { ReactNode } from 'react';
import { RowComponent, TextComponent } from '.';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
  onPress: () => void;
  label: string;
  icon?: ReactNode;
  textColor?: string;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const TagComponent = (props: Props) => {
  const { icon, onPress, label, textColor, bgColor, styles } = props;

  return (
    <TouchableOpacity
      style={[
        globalStyles.row,
        globalStyles.tag,
        {
          backgroundColor: bgColor ? bgColor : appColors.white,
        },
        styles,
      ]}
    >
      {icon && icon}
      <TextComponent
        text={label}
        font={fontFamilies.medium}
        styles={{ marginLeft: icon ? 8 : 0 }}
        color={
          textColor ? textColor : bgColor ? appColors.white : appColors.gray
        }
      ></TextComponent>
    </TouchableOpacity>
  );
};

export default TagComponent;
