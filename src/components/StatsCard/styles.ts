import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    borderRadius: 25,
    marginTop: 28,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.00,
    elevation: 12,
    transform: [{translateY: -100}],
  },
  header:{
    flex: 1,
    justifyContent: 'space-between',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 10,
  },
  content: {
  
  },
  victoryPie: {
    width: '100%', 
    justifyContent:'center', 
    alignItems: 'center'
  },
  containerLabels: {
    paddingBottom: 20,
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'space-evenly'
  },
  labelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, 
  },
  labelIndicator: {
    width: 12,
    height: 12,
    marginRight: 10,
    borderRadius: 12
  },
  containerLabel: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    marginRight: 20
  },
  elementNull: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'center',
    paddingTop: 20
  }
});