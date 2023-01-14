import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT_LIGHT,
    top: -80
  }
});