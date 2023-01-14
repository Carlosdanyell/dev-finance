import React,{ useEffect } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { activateKeepAwake } from "expo-keep-awake";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/Routes';



activateKeepAwake();


import {
  useFonts, 
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';






export default function App() {
  
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })



  let {height, width} = Dimensions.get('window');
  
  EStyleSheet.build({
    $rem: width < 400? 12 : width > 450 ? 20 : 16
  });

 
    

    
    return (
        <View style={styles.container}>
          <GestureHandlerRootView style={{flex: 1}}>
          <RootSiblingParent>
            <AuthProvider>
             {fontsLoaded? <Routes /> : <ActivityIndicator />} 
            </AuthProvider>
          </RootSiblingParent>
          </GestureHandlerRootView>
        </View>
      );
   
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});
