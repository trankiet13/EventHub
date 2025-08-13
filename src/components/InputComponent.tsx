import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TextInputProps,
  KeyboardTypeAndroid,
} from 'react-native';
import React, { ReactNode, useState } from 'react';
import { EyeSlash } from 'iconsax-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';
import { Dimensions } from 'react-native';
interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardTypeAndroid;
}
const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    affix,
    suffix,
    placeholder,
    isPassword,
    allowClear,
    type,
  } = props;
  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);
  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPass}
        placeholderTextColor={'#747688'}
        keyboardType={type ?? 'default'}
      ></TextInput>
      {suffix ?? suffix}
      {/* <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }
      >
        {isPassword ? (
          <EyeSlash size={22} color={appColors.text} />
        ) : (
          value.length > 0 && (
            <AntDesign
              name="close"
              size={22}
              color={appColors.text}
            ></AntDesign>
          )
        )}
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={
          isPassword
            ? () => setIsShowPass(!isShowPass) // toggle state, không dùng prop
            : () => onChange('') // xóa nội dung
        }
      >
        {isPassword ? (
          <FontAwesome
            name={isPassword ? 'eye-splash' : 'eye'}
            size={22}
            color={appColors.text}
          />
        ) : (
          value.length > 0 && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray,
    // width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 40, // chừa padding 20 mỗi bên,
    paddingHorizontal: 17,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  },
});
