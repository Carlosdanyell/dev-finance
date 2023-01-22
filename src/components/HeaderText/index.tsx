import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';

interface Props{
    title: String;
    subtitle?: String;
    margin?: number;
    center?: boolean;
}

export function HeaderText({title, subtitle, margin, center} : Props ){
  return (
    <View style={{
      alignItems: center? 'center' : 'flex-start',
      justifyContent: center? 'center' : 'flex-start'
      }}>
        <Text style={[styles.title,{marginBottom: margin? margin : 12,}]}>
            {title}
        </Text>
       {subtitle? <Text style={styles.subtitle}>
            {subtitle}
        </Text> : <View></View>}
    </View>
  );
}


const styles = EStyleSheet.create({

  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.MEDIUM,
  },
  subtitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
  },
});