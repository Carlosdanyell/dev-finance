import { ThemeProvider } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    justifyContent: 'center',
    alignItems:'center',
    height: '100%',
    padding: 20,
    paddingBottom: 190

  },
  header: {
    width: '100%',
    marginBottom: 100,
  },
  title:{
    width: '100%',
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.LG
  },
  subtitle: {
    width: 250,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.SM,
  },
  socialButton: {
    width: '100%',
    borderRadius: 5,
    marginVertical: 8,
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    padding: 8,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSocialButton: {
    paddingHorizontal: 22,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
  facebookLogo: {
    width: 30,
    height: 30,
  },
  containerWelcome: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    marginVertical: 77,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    marginBottom: 18
  },
  welcomeText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  loginButton: {
    width: '100%',
    position: 'absolute',
    bottom: 190,
    backgroundColor: THEME.COLORS.PRIMARY,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  textButtonLogin :{
    width: '25%',
    textAlign: 'right',
    color: THEME.COLORS.TEXT_DARK,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    marginRight: 22,
  },
});
