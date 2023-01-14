import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  contentHeader:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1.68rem',
    marginTop: '1.25rem',
    marginBottom: '1rem'
  },
  userImage:{
    width: '3.31rem',
    height:'3.31rem',
    borderRadius: '3.31rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIconsHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader:{
    marginLeft: '1.56rem'
  },
  userName:{
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_DARK,
    marginBottom: '0.625rem',
    marginLeft: '2rem',
  },
});