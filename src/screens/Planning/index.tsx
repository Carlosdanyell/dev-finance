import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { FocusAwareStatusBar } from '../../components/StatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../../theme';

import { HeaderScreen } from '../../components/HeaderScreen';

import { styles } from './styles';

export function Planning() {
  const [visibility, setVisibility] = useState<boolean>(true);

  const handleVisibility = (par:Boolean) => {

      setVisibility(!par)
  }
  return (
    <SafeAreaView style={{backgroundColor: THEME.COLORS.PRIMARY, flex: 1}}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="transparent"  translucent/>
    <HeaderScreen changeVisible={handleVisibility} iconsVisible={false}/>
    <View style={styles.container}>
        <Text style={styles.text}>
           Em construção...
        </Text>
    </View>
    </SafeAreaView>

  );
}