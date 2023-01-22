import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { routeParams } from '../../@types/@navigation';
import { FocusAwareStatusBar } from '../../components/StatusBar';
import { HeaderScreen } from '../../components/HeaderScreen'
import { BalanceCard } from '../../components/BalanceCard';
import { Functionalities } from '../../components/Functionalities';
import { Movimentations } from '../../components/Movimentations';
import { StatsCard } from '../../components/StatsCard';
import { styles } from './styles';
import { THEME } from '../../../theme';
import { HeaderText } from '../../components/HeaderText';
import { Entypo } from '@expo/vector-icons';




export function Home() {
  const [visibility, setVisibility] = useState<boolean>(true);
  
  const navigator = useNavigation();

  const route = useRoute();
  const state = route.params as routeParams

  const handleVisibility = (par:Boolean) => {
      setVisibility(!par)
  }

  const handleNavToHistoric = () => {
    navigator.navigate('historic')
  };

  const handleNavToReport = () => {

      navigator.navigate('report');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME.COLORS.PRIMARY}  translucent/>
      <ScrollView showsVerticalScrollIndicator={false}>
  
        <HeaderScreen iconsVisible={true} changeVisible={handleVisibility}/>
        <View style={styles.section}></View>

        <View style={styles.main}> 
          <BalanceCard visible={visibility} refresh={state}/>

          <TouchableOpacity  activeOpacity={0.95} style={styles.cardMovimentations} onPress={handleNavToHistoric}>
            <View style={styles.headerCard}>
              <HeaderText 
                  title={'Registros'}
                  subtitle={'Últimas movimentações'}
                  margin={8}
              />  
              <Entypo
                name="chevron-thin-right"
                color={THEME.COLORS.TEXT_LIGHT}
                size={16}
              />
            </View>
            <Movimentations refresh={state}/>
          </TouchableOpacity>

          <TouchableOpacity  activeOpacity={0.95} style={styles.cardMovimentations} onPress={handleNavToReport}>
            <View style={styles.headerCard}>
              <HeaderText 
                title={'Gráficos'}
                subtitle={'Resumo de despesas'}  
                margin={8} 
              />  
              <Entypo
                name="chevron-thin-right"
                color={THEME.COLORS.TEXT_LIGHT}
                size={16}
              />
            </View>
             <StatsCard refresh={state} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}