import { StyleSheet } from 'react-native';

import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
    buttonIcon:{
        width: 60,
        height: 60,
        borderRadius: 50,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: THEME.COLORS.SHADOW_400,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 16.00,
        elevation: 12,
    },
});