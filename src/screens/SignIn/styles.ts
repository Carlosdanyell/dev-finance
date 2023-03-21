import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    justifyContent: 'center',
    alignItems:'center',
    height: '100%',
    padding: '1.25rem',
    paddingBottom: '11.87rem'

  },
  header: {
    width: '100%',
    marginBottom: '6.25rem',
  },
  title:{
    width: '100%',
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.LG
  },
  subtitle: {
    width: '15.62rem',
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.SM,
  },
  socialButton: {
    width: '100%',
    borderRadius: '0.31rem',
    marginVertical: '0.5rem',
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: '0.62rem',
    padding: '0.5rem',
    marginHorizontal: '1.25rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSocialButton: {
    paddingHorizontal: '1.37rem',
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
  },
  googleLogo: {
    width: '1.87rem',
    height: '1.87rem',
    translateX: '-0.6rem'
  },
  facebookLogo: {
    width: '1.87rem',
    height: '1.87rem',
  },
  containerWelcome: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '1.87rem',
    marginVertical: '4.81rem',
  },
  userImage: {
    width: '6.25rem',
    height: '6.25rem',
    borderRadius: '3.12rem',
    marginBottom: '1.12rem'
  },
  welcomeText: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_LIGHT,
  },
  loginButton: {
    width: '100%',
    position: 'absolute',
    bottom: '11rem',
    backgroundColor: THEME.COLORS.PRIMARY,
    marginTop: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '1.25rem',
    paddingHorizontal: '1rem',
    borderRadius: '0.31rem',
  },
  textButtonLogin :{
    width: '25%',
    textAlign: 'right',
    color: THEME.COLORS.TEXT_DARK,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    marginRight: '1.37rem',
  },
  handleOtherAccountButton:{
    width: '100%',
    position: 'absolute',
    bottom: '6.5rem',
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    marginTop: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '1.25rem',
    paddingHorizontal: '1rem',
    borderRadius: '0.31rem',
  },
  textButtonHandleOtherAccount :{
    color: THEME.COLORS.TEXT_LIGHT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
  },
});
