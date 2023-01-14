import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

interface LoadingProps {
    color: string;
    size: number;
    visibility?: boolean;
}
 

export function Loading({ color, size, visibility} : LoadingProps) {
  return (
    <View style={[styles.container ,{display: visibility? 'flex': 'none'}]}>
        <ActivityIndicator 
         size={size}
         color={color}
        />
    </View>
  );
}



const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: '100%',
    marginHorizontal: '50%',

  },
});