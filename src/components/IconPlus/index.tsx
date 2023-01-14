import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';
import { Plus } from 'phosphor-react-native';


export function IconPlus({focused}:any) {
  return (
    <View style={[styles.container,{  backgroundColor: focused? THEME.COLORS.PRIMARY: THEME.COLORS.PRIMARY_LIGTH,}]}>
        <Plus
            color={focused? '#FAFAFA' : '#e7e7e7'}
            size={15}
            weight= 'bold'
        />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    width: '3.75rem',
    height: '3.75rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1.87rem',
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8.14,
    
    elevation: '0.31rem',
  },
});