import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '1rem',
    paddingHorizontal: '0.62rem',
    
  },
  contentDescription:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '0.25rem',
    marginRight: '1.25rem',
    borderRadius: '1.87rem',
    padding: '0.62rem',
  },
  contentValueDate: {
    flex: 1,
  },
  date: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    marginBottom: '1.25rem',
    alignSelf: 'flex-end',
  },
  value: {
    fontSize: '1rem',
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'flex-start',
  },
});