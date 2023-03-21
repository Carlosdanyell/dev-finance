import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from 'react-native';
import { THEME } from "../../../theme";

export const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '1.62rem',
    paddingVertical: '0.75rem'
  },
  iconContainer: {
    borderRadius: '3rem',
    padding: '0.82rem',
    justifyContent: 'center',
    alignItens: 'center',
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
  containerText: {
    paddingLeft: '1rem',
    flexDirection: 'column'
  },
  label: {
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.SM,
  },
  value: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginTop: '0.25rem'
  },
});
