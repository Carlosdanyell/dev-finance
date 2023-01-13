import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  contentHeader:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 27,
    marginTop: 20,
    marginBottom: 16
  },
  userImage:{
    width: 53,
    height:53,
    borderRadius: 53,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIconsHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader:{
    marginLeft: 25
  },
  userName:{
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_DARK,
    marginBottom: 10,
    marginLeft: 32,
  },
});