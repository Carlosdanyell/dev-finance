import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { activateKeepAwake } from "expo-keep-awake";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider } from './src/contexts/auth';

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

import { Routes } from './src/Routes'




export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
