import { useState } from 'react';
import {  Gear, CreditCard, ChartLine, Book  } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { ButtonIcon } from '../ButtonIcon';
import { THEME } from '../../../theme';
import { styles } from './styles';
import { routeParams } from '../../@types/@navigation';




export function Functionalities() {

  const navigator = useNavigation();

   const navToReport = () => {

        navigator.navigate('report');
   }

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
            <ButtonIcon onPress={() => navToReport()} background={THEME.COLORS.BACKGROUND_900_LIGHT}>
                <ChartLine
                    color={THEME.COLORS.PRIMARY}
                    size={27}        
                />
            </ButtonIcon>
            <Text style={styles.description}>Relatórios</Text>
        </View>

        <View style={styles.button}>
            <ButtonIcon background={THEME.COLORS.BACKGROUND_900_LIGHT}>
                <Book
                    color={THEME.COLORS.PRIMARY}
                    size={27}        
                />
            </ButtonIcon>
            <Text style={styles.description}>Registros</Text>
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