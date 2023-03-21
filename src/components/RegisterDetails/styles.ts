import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from 'react-native'
import { THEME } from "../../../theme";

export const styles = EStyleSheet.create({
  container: {
    paddingVertical: '0.75rem',
   
  },
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '1.62rem',
    paddingVertical: '2.37rem',
    justifyContent: 'space-between'
  },
  updateButton: {
    width: '13.25rem',
    justifyContent: 'center',
    alignItens: 'center',
    flexDirection: 'row',
    padding: '1.12rem',
    borderRadius: '0.75rem',
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 10,
  },
  textUpdateButton: {
    alignSelf: 'center',
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.SM,
    paddingRight: '1.62rem'
  },
  deleteButton: {
    paddingVertical: '1.12rem',
    paddingHorizontal: '2.12rem',
    borderRadius: '0.75rem',
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 10,

  }
});