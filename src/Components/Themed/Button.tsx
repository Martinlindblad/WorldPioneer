import {Pressable as DefaultButton, StyleSheet, ViewStyle} from 'react-native';
import colors from 'src/theme/colors';
import currentColorScheme from 'src/theme/colors';
import {Text} from 'src/Components/Themed/Text';

const styles = StyleSheet.create({
  defaultButton: {
    color: colors.text,
    borderColor: colors.border,
  },

  'defaultButton.l': {},
  'defaultButton.m': {},
  'defaultButton.s': {},
});

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  variant: 'l' | 'm' | 's';
  otherProp?: ViewStyle;
}
export const Button = ({props}: {props: ButtonProps}) => {
  const {variant, style, title, ...otherProps} = props;
  return (
    <DefaultButton
      style={[
        {color: currentColorScheme.text},
        style,
        styles.defaultButton,
        styles[`defaultButton.${variant}`],
      ]}
      {...otherProps}>
      <Text variant={variant} props={...style}>
        {title}
      </Text>
    </DefaultButton>
  );
};
