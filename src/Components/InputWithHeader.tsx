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

export interface LabeledInputProps extends TextInputProps {
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
        variant={'l'}
        disabled={disabled || locked}
        placeholder={customPlaceholder || 'Skriv...'}
        placeholderTextColor={colors.border}
        textAlignVertical={'top'}
        onChangeText={(nextValue: string) => handleTextChange(nextValue)}
        {...rest}
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
