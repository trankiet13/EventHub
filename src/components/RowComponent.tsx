import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';
interface Props {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
}
const RowComponent = (props: Props) => {
  const { justify, styles, children, onPress } = props;
  const localStyle = [
    globalStyles.row,
    {
      justifyContent: justify,
    },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity style={localStyle} activeOpacity={0.9} onPress={onPress}>{children}</TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;
