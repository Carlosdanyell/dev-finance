import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';


export const styles = EStyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  main: {
    paddingHorizontal: '0.62rem',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT
  },
  cardMovimentations: {
    marginTop: '1.5rem',
    borderRadius: '1.56rem',
    transform: [{translateY: -100}]
  },
  section: {
    backgroundColor: THEME.COLORS.PRIMARY,
    width: '100%',
    height: '6.25rem'
  },
});