import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
    borderRadius: '1.56rem',
    marginTop: '1.75rem',
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
    paddingHorizontal: '1.75rem',
    paddingTop: '1.25rem',
    paddingBottom: '0.62rem',
  },
  content: {
  
  },
  victoryPie: {
    width: '100%', 
    justifyContent:'center', 
    alignItems: 'center'
  },
  containerLabels: {
    paddingBottom: '1.25rem',
    paddingLeft: '1.25rem',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  labelContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0.62rem', 
  },
  labelIndicator: {
    width: '0.75rem',
    height: '0.75rem',
    marginRight: '0.62rem',
    borderRadius: '0.75rem'
  },
  containerLabel: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    marginRight: '1.25rem'
  },
  elementNull: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'center',
    paddingTop: '1.25rem'
  }
});