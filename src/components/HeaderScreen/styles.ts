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
    borderRadius: 50,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PRIMARY_LIGTH,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    
    elevation: 17,
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