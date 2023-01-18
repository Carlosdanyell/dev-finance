import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, TouchableHighlight,} from 'react-native';
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





export function Home() {
  const [visibility, setVisibility] = useState<boolean>(true);
  
  const navigator = useNavigation();

  const route = useRoute();
  const state = route.params as routeParams

  const handleVisibility = (par:Boolean) => {
      setVisibility(!par)
  }

  function nav(){
    navigator.navigate('historic')
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME.COLORS.PRIMARY}  translucent/>
      <ScrollView showsVerticalScrollIndicator={false} >

        <HeaderScreen iconsVisible={true} changeVisible={handleVisibility}/>
        <View style={styles.section}></View>
        <View style={styles.main}> 
          <BalanceCard visible={visibility} refresh={state}/>

          <Functionalities />
          <TouchableHighlight style={styles.cardMovimentations} onPress={nav}>
            <Movimentations 
            refresh={state}
            title='Registros'
            subtitle='Últimas movimentações'
            />
          </TouchableHighlight>

          <StatsCard refresh={state} />
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}