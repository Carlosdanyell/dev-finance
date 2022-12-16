import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 10,
    
  },
  contentDescription:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 4,
    marginRight: 20,
    borderRadius: 30,
    padding: 10,
  },
  contentValueDate: {
    flex: 1,
  },
  date: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  value: {
    fontSize: 15,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'flex-start',
  },
});