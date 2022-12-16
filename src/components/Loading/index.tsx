import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';

interface LoadingProps {
    color: string;
    size: number;
}
 

export function Loading({ color, size} : LoadingProps) {
  return (
    <View style={styles.container}>
        <ActivityIndicator 
         size={size}
         color={color}
        />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginVertical: '50%'
  },
});