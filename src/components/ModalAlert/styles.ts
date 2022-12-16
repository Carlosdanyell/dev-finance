import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  content: {
    padding: 32,
    borderRadius: 25,
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 32
  },
  buttonPattern: {
    backgroundColor: THEME.COLORS.SUCCESS,
    width: 80,
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_LIGHT
  },
});