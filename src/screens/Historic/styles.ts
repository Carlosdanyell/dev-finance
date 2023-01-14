import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    paddingTop: '2.5rem',
    paddingBottom: '2.18rem',
    paddingHorizontal: '1.56rem',
    flexDirection: 'row',
  },
  headerTitle: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    alignSelf: 'center'
  }, 
  headerInput:{
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    width: '90%',
    borderRadius: '1.56rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1.7rem',
    paddingVertical: '0.62rem',
    alignSelf: 'center',
    marginBottom: '0.31rem',    
    borderColor: THEME.COLORS.TEXT_LIGHT,
    borderWidth: 1,
  }, 
  input: {
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.MD,
    width: '100%',
    paddingLeft: '1.25rem',
    justifyContent: 'center',
  },
  contentList: {
    paddingBottom: '12.5rem',
  },
  cardMovimentation: {
    paddingHorizontal: '0.62rem',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  }
});