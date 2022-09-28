// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({colors, dimensions, font}: any) => ({
  header1: {
    fontSize: dimensions.baseSize * 20,
    ...font({fontWeight: '900'}),
    color: colors.text,
  },
  header2: {
    fontSize: dimensions.baseSize * 16,
    ...font({fontWeight: '800'}),
    color: colors.text,
  },
  header3: {
    fontSize: dimensions.baseSize * 16,
    ...font({fontWeight: '700'}),
    color: colors.text,
    letterSpacing: -0.2,
  },
  header4: {
    fontSize: dimensions.baseSize * 16,
    ...font({fontWeight: '600'}),
    color: colors.text,
  },
  'header3.l': {
    fontSize: 38,
  },
  'header3.m': {
    fontSize: 23,
  },
  'header3.s': {
    fontSize: 20,
  },
  'header3.xs': {
    fontSize: 18,
  },
  'header4.s': {
    fontSize: 20,
  },
  'header4.xs': {
    fontSize: 18,
  },
  'header4.xxs': {
    fontSize: 16,
  },
});
