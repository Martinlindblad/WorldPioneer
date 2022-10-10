import React from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  TextInputFocusEventData,
  TextInputProps,
  View,
  StyleSheet,
} from 'react-native';
import colors from 'src/theme/colors';
import {Header} from './Themed/Header';
import {TextInput} from './Themed/TextInput';

interface LabeledInputProps extends TextInputProps {
  handleTextChange: (arg0: string) => void;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;

  value?: string;
  title: string;
  customPlaceholder?: string;
  accessoryRight?: any;
  multiline?: boolean;
  disabled?: boolean;
  isMissingInRequiredFields?: boolean;
  secureTextEntry?: boolean;
  locked?: boolean;
  inputRef?: React.MutableRefObject<TextInputProps | null>;
  type?: 'column' | 'row';
}

const styles = StyleSheet.create({
  selectMenuTitle: {},
});
const InputWithHeader = ({
  title,
  handleTextChange,
  customPlaceholder,
  accessoryRight,
  value,
  isMissingInRequiredFields,
  onBlur,
  disabled,
  locked,
  secureTextEntry,
  multiline,
  type = 'column',
  inputRef,
  ...rest
}: LabeledInputProps): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flexDirection: type,
        alignItems: type === 'row' ? 'center' : 'flex-start',
        justifyContent: 'space-between',
      }}>
      <Header variant="s" style={styles.selectMenuTitle}>
        {title}
      </Header>
      <TextInput
        disabled={disabled || locked}
        onBlur={onBlur}
        status={isMissingInRequiredFields ? 'danger' : 'basic'}
        value={value}
        placeholder={customPlaceholder || 'Skriv...'}
        placeholderTextColor={colors.border}
        accessoryRight={accessoryRight}
        multiline={multiline}
        textAlignVertical={'top'}
        onChangeText={(nextValue: string) => handleTextChange(nextValue)}
        textStyle={{
          color: colors.primaryLabel,
          minHeight: multiline ? 132 : 0,
          paddingTop: Platform.OS === 'android' ? 8 : 0,
        }}
        secureTextEntry={secureTextEntry}
        {...rest}
        ref={inputRef}
        style={{
          minHeight: 45,
          borderRadius: 16,
          borderWidth: 0,
        }}
      />
    </View>
  );
};

export default InputWithHeader;
