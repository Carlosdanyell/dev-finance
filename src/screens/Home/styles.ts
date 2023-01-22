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
  headerCard:{
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1.75rem',
    paddingTop: '1.25rem',
    paddingBottom: '0.62rem',
  
  },
  cardMovimentations: {
    marginTop: '2rem',
    borderRadius: '1.56rem',
    transform: [{translateY: -100}],
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 12,
  },
  section: {
    backgroundColor: THEME.COLORS.PRIMARY,
    width: '100%',
    height: '6.25rem'
  },
});