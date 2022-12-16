import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
  },
  header: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    paddingTop: 40,
    paddingBottom: 35,
    paddingHorizontal: 25,
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  headerTitle: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    alignSelf: 'center'
  },
  headerContainer: {
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    color: THEME.COLORS.TEXT_LIGHT,
    paddingTop: 32,
  },
  labelText: { 
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    color: THEME.COLORS.TEXT_LIGHT,
    marginLeft: 26,
  },
  containerRegisterOperation: {
    height: '100%',
    paddingBottom: 60,
    marginTop: 46,
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    borderRadius: 25,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset:{
    width: 0,
    height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  headerContent:{
    justifyContent: 'space-between',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 10,
  },
  mainContent: {
   
  },
  containerInput: {
    marginTop: 20
  },
  input: {
    width: '90%',
    height: 56,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    borderColor: THEME.COLORS.TEXT_LIGHT,
    borderWidth: 1,
    paddingLeft: 24,
    marginTop: 12,
    color: THEME.COLORS.TEXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25,

  },
  inputValue: {
    width: '90%',
    height: 56,
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: THEME.COLORS.TEXT_LIGHT,
    borderWidth: 1,
    paddingLeft: 24,
    marginTop: 12,
    color: THEME.COLORS.TEXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    flexDirection: 'row',
    alignItens:'center',
  },
  labelReal: {
    alignSelf: 'center',
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM, 
    color: THEME.COLORS.TEXT_LIGHT
  },
  valueInput: {
    flex: 1,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM, 
    color: THEME.COLORS.TEXT_LIGHT,
  },
  errorText: {
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginTop: 5,
    marginLeft: '10%'
  },
  submitButton:{
    width: 245,
    height: 56,
    marginTop: 46,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{
    width: 0,
    height: 9,
    },
    shadowOpacity: 0.48 ,
    shadowRadius: 11.95 ,
    elevation:18,
    borderRadius: 30,
    alignSelf: 'center',
  },
  textButton:{
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_DARK
  },
  // styles for modalize
  headerModalize: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 15,
  },
  textHeaderModalize: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_LIGHT
  },
  cardCategory: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  iconCategory: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems:'center',
  },
  titleCategory: {
    width: '82%',
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginLeft: 12,
    color: THEME.COLORS.TEXT_LIGHT
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.SUCCESS,
  }
});