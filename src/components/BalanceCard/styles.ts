import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center',
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
  },
  shadowOpacity: 0.5,
  shadowRadius: 16.00,
  elevation: 12,
  transform: [{translateY: -100}]
  },
  containerBalance:{
    marginTop: 5,
    alignItems: 'center',
    height: 95,
  },
  titleValue:{
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  balanceValue: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    color: THEME.COLORS.TEXT_LIGHT,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  containerMovimentations:{
    flexDirection: 'row',

  },
  contentMovimentations: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 5,
    paddingRight: 5,
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