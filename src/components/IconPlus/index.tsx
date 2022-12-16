
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: THEME.COLORS.SHADOW_400,
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8.14,
    
    elevation: 5,
  },
});