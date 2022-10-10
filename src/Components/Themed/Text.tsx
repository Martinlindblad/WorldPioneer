import {Text as DefaultText, TextProps, StyleSheet} from 'react-native';
import colors from 'src/theme/colors';
import currentColorScheme from 'src/theme/colors';

const styles = StyleSheet.create({
  defaultText: {
    color: colors.text,
  },

  'defaultText.l': {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  'defaultText.m': {
    fontSize: 16,
    lineHeight: 20,
  },
  'defaultText.s': {
    fontSize: 14,
  },
});

export const Text = ({
  variant = 's',
  props,
  children,
  style,
}: {
  variant: 'l' | 'm' | 's';
  props?: TextProps;
  style?: any;
  children?: React.ReactNode;
}) => {
  const {...otherProps} = props;

  return (
    <DefaultText
      style={[
        {color: currentColorScheme.text},
        style,
        styles.defaultText,
        styles[`defaultText.${variant}`],
        ,
      ]}
      {...otherProps}>
      {children}
    </DefaultText>
  );
};
