import {Text as DefaultHeader, TextProps, StyleSheet} from 'react-native';
import colors from 'src/theme/colors';
import currentColorScheme from 'src/theme/colors';

const styles = StyleSheet.create({
  defaultHeader: {
    color: colors.text,
  },

  'defaultHeader.l': {
    fontSize: 38,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  'defaultHeader.m': {
    fontSize: 23,
    lineHeight: 20,
  },
  'defaultHeader.s': {
    fontSize: 20,
  },
});

export const Header = ({
  variant = 's',
  props,
  children,
}: {
  variant: 'l' | 'm' | 's';
  props: TextProps;
  children: React.ReactNode;
}) => {
  const {style, ...otherProps} = props;

  return (
    <DefaultHeader
      style={[
        {color: currentColorScheme.text},
        style,
        styles.defaultHeader,
        styles[`defaultHeader.${variant}`],
        ,
      ]}
      {...otherProps}>
      {children}
    </DefaultHeader>
  );
};
