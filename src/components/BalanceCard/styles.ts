import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

let {height, width} = Dimensions.get('window')
var smalScreen = width < 390;


export const styles = EStyleSheet.create({
  container: {
    width: '90%',
    maxWidth: '25rem',
    alignSelf: 'center',
    borderRadius: '1.56rem',
    padding: '1rem',
    marginTop: '1.25rem',
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
  },
  shadowOpacity: 0.5,
  shadowRadius: 16.00,
  elevation: 12,
  transform: [{translateY: smalScreen? -80 : -100}]
  },
  containerBalance:{
    marginTop: '0.31rem',
    alignItems: 'center',
    height: '5.93rem',
  },
  titleValue:{
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  balanceValue: {
    fontSize: THEME.FONT_SIZE.MLG,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    color: THEME.COLORS.TEXT_LIGHT,
    alignSelf: 'center',
    marginTop: '0.62rem',
    marginBottom: '1.87rem',
  },
  containerMovimentations:{
    flexDirection: 'row',

  },
  contentMovimentations: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '0.62rem',
    marginTop: '0.31rem',
    paddingRight: '0.31rem',
  },
  incomesValue:{
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.SUCCESS,
  },
  expenseValue:{
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.ALERT,
  }
});