import { Coins, ChartBar, Receipt, Barcode, Gear, CreditCard, ChartLine, Book  } from 'phosphor-react-native';
import { View, Text } from 'react-native';

import { ButtonIcon } from '../ButtonIcon';

import { THEME } from '../../../theme';
import { styles } from './styles';

export function Functionalities() {

  return (
    <View style={styles.container}>

        <View style={styles.button}>
            <ButtonIcon background={THEME.COLORS.BACKGROUND_900_LIGHT}>
                <CreditCard
                    color={THEME.COLORS.PRIMARY}
                    size={27}        
                />
            </ButtonIcon>
            <Text style={styles.description}>Cartões</Text>
        </View>

        <View style={styles.button}>
            <ButtonIcon background={THEME.COLORS.BACKGROUND_900_LIGHT}>
                <ChartLine
                    color={THEME.COLORS.PRIMARY}
                    size={27}        
                />
            </ButtonIcon>
            <Text style={styles.description}>Gráficos</Text>
        </View>

        <View style={styles.button}>
            <ButtonIcon background={THEME.COLORS.BACKGROUND_900_LIGHT}>
                <Book
                    color={THEME.COLORS.PRIMARY}
                    size={27}        
                />
            </ButtonIcon>
            <Text style={styles.description}>Relatórios</Text>
        </View>

        <View style={styles.button}>
            <ButtonIcon background={THEME.COLORS.BACKGROUND_900_LIGHT}>
                <Gear
                    color={THEME.COLORS.PRIMARY}
                    size={27}        
                />
            </ButtonIcon>
            <Text style={styles.description}>Ajustes</Text>
        </View>
    </View>
  );
}