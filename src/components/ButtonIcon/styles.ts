import EStyleSheet from 'react-native-extended-stylesheet';

import { THEME } from '../../../theme';

export const styles = EStyleSheet.create({
    buttonIcon:{
        width: '3.75rem',
        height: '3.75rem',
        borderRadius: '3.125rem',
        padding: '0.18rem',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: THEME.COLORS.SHADOW_400,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 16,
        elevation: 12,
    },
});