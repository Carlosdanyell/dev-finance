import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  main: {
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT
  },
  cardMovimentations: {
    marginTop: 24,
    borderRadius: 25,
    transform: [{translateY: -100}]
  },
  section: {
    backgroundColor: THEME.COLORS.PRIMARY,
    width: '100%',
    height: 100
  },
});