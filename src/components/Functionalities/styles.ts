import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 38,
    marginBottom: 18,
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
        marginTop: 15, 
    },
});