import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

let {height, width} = Dimensions.get('window')
var smalScreen = width < 390;


export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    maxWidth: smalScreen? '36rem' : '25rem',
    alignSelf: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    borderRadius: '1.56rem',
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 8,
  },
  header:{
    flex: 1,
    justifyContent: 'space-between',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1.75rem',
    paddingTop: '1.25rem',
    paddingBottom: '0.62rem',
  },
  containerMovimentation: {
    paddingHorizontal: '0.62rem'
  },
  elementNull: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'center',
    paddingVertical: '1.25rem'
  }
});