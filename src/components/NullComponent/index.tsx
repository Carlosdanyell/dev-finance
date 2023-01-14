import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../../theme';

interface Props{
    description: string;
}

export function NullComponent({description} : Props) {


  return (
    <View style={styles.container}>
      <Text style={styles.elementNull}>
        {description}
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16
  },
  elementNull: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    alignSelf: 'center',
    paddingVertical: 5
  },
});
