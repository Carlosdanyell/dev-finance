import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    paddingTop: 40,
    paddingBottom: 35,
    paddingHorizontal: 25,
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
    borderRadius: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 10,
    alignSelf: 'center',
    marginBottom: 5,    
    borderColor: THEME.COLORS.TEXT_LIGHT,
    borderWidth: 1,
  }, 
  input: {
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.MD,
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  contentList: {
    paddingBottom: 200,
  },
  cardMovimentation: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
  }
});