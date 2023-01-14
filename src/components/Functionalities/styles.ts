import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '1.25rem',
    marginTop: '2.37rem',
    marginBottom: '1.12rem',
    transform: [{translateY: -100}]
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    description:{
        fontFamily: THEME.FONT_FAMILY.LIGHT,
        fontSize: THEME.FONT_SIZE.SM,
        alignSelf: 'center',
        marginTop: '1rem', 
    },
});