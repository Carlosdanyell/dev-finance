import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
  },
  header: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    paddingTop: '2.5rem',
    paddingBottom: '2.18rem',
    paddingHorizontal: '1.56rem',
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
    paddingTop: '2rem',
  },
  labelText: { 
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    color: THEME.COLORS.TEXT_LIGHT,
    marginLeft: '1.62rem',
  },
  containerRegisterOperation: {
    height: '100%',
    paddingBottom: '3.75rem',
    marginTop: '2.87rem',
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    borderRadius: '1.56rem',
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset:{
    width: 0,
    height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: '1.12rem',
  },
  headerContent:{
    justifyContent: 'space-between',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '1.75rem',
    paddingTop: '1.25rem',
    paddingBottom: '0.62rem',
  },
  mainContent: {
   
  },
  containerInput: {
    marginTop: '1.25rem'
  },
  input: {
    width: '90%',
    height: '3.5rem',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: '1.87rem',
    borderColor: THEME.COLORS.TEXT_LIGHT,
    borderWidth: 1,
    paddingLeft: '1.5rem',
    marginTop: '0.75rem',
    color: THEME.COLORS.TEXT_LIGHT,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    paddingVertical: '0.31rem',
    paddingHorizontal: '1rem',
    borderWidth: 1,
    borderRadius: '1.56rem',

  },
  titleCategoryButton: {
    marginLeft: 15, 
    alignSelf: 'center',
    fontSize: THEME.FONT_SIZE.SM
  },
  inputValue: {
    width: '90%',
    height: '3.5rem',
    alignSelf: 'center',
    borderRadius: '1.87rem',
    borderColor: THEME.COLORS.TEXT_LIGHT,
    borderWidth: 1,
    paddingLeft: '1.5rem',
    marginTop: '0.75rem',
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
    marginTop: '0.31rem',
    marginLeft: '10%'
  },
  submitButton:{
    width: '15.31rem',
    height: '3.5rem',
    marginTop: '2.87rem',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{
    width: 0,
    height: 9,
    },
    shadowOpacity: 0.48 ,
    shadowRadius: 11.95 ,
    elevation:18,
    borderRadius: '1.87rem',
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
    paddingHorizontal: '1rem',
    paddingTop: '1.56rem',
    paddingBottom: '1.56rem',
  },
  textHeaderModalize: {
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT_LIGHT
  },
  cardCategory: {
    width: '100%',
    flexDirection: 'row',
    padding: '1rem',
    alignItems: 'center',
  },
  iconCategory: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '2.5rem',
    justifyContent: 'center',
    alignItems:'center',
  },
  titleCategory: {
    width: '82%',
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginLeft: '0.75rem',
    color: THEME.COLORS.TEXT_LIGHT
  },
  selected: {
    width: '1rem',
    height: '1rem',
    borderRadius: '1rem',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.SUCCESS,
  }
});