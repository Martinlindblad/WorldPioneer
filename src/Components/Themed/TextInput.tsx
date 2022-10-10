import {
  TextInput as DefaultTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import colors from 'src/theme/colors';
import currentColorScheme from 'src/theme/colors';

const styles = StyleSheet.create({
  defaultTextInput: {
    color: colors.text,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: colors.secondaryBackground,
    borderColor: colors.border,
    borderWidth: 1,
  },

  'defaultTextInput.l': {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  'defaultTextInput.m': {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  'defaultTextInput.s': {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

export const TextInput = ({
  variant = 's',
  props,
  children,
  style,
  ref,
  disabled,
}: {
  variant: 'l' | 'm' | 's';
  style?: any;
  props?: TextInputProps;
  children?: React.ReactNode;
  disabled: boolean | undefined;
  ref?: React.LegacyRef<DefaultTextInput> | undefined;
}) => {
  const {...otherProps} = props;

  return (
    <DefaultTextInput
      ref={ref}
      placeholderTextColor={colors.primaryAlt}
      style={[
        {color: currentColorScheme.text},
        style,
        styles.defaultTextInput,
        styles[`defaultTextInput.${variant}`],
      ]}
      {...otherProps}>
      {children}
    </DefaultTextInput>
  );
};
