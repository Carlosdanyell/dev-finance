import React, { useState } from 'react';
import {TouchableOpacity,View, Text, Dimensions,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { THEME } from '../../../theme';


interface Props{
  selectionMode: Number;
  option1: String;
  option2: String;
  onSelectSwitch: (params: any)=> void
  selectionColor: string;
}


const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
  selectionColor
}: Props) => {

  const [getSelectionMode, setSelectionMode] = useState(selectionMode);


  const updatedSwitchData = (val: number) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  let {height, width} = Dimensions.get('window')
  var latgerScreen = width > 450;
  

  const styles = EStyleSheet.create({
    container: {
      height: latgerScreen? 70 : 56,
      width: '90%',
      borderRadius: latgerScreen? 38 : 30,
      borderWidth: 1,
      borderColor: THEME.COLORS.TEXT_LIGHT,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 2,
      alignSelf: 'center',
      marginTop: latgerScreen? 25 : 20
    },
    textButton1: {
      color: getSelectionMode == 1 ? THEME.COLORS.TEXT_DARK: THEME.COLORS.TEXT_LIGHT,
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      fontSize: THEME.FONT_SIZE.MD,
    },
    textButton2: {
      color: getSelectionMode == 2 ? THEME.COLORS.TEXT_DARK: THEME.COLORS.TEXT_LIGHT,
      fontFamily: THEME.FONT_FAMILY.MEDIUM,
      fontSize: THEME.FONT_SIZE.MD,
    },
    button1: {
      flex: 1,
      backgroundColor: getSelectionMode == 1 ? THEME.COLORS.SUCCESS : THEME.COLORS.BACKGROUND_800_LIGHT,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: getSelectionMode == 1 ? THEME.COLORS.SUCCESS : THEME.COLORS.BACKGROUND_800_LIGHT,
      shadowOffset:{
        width: 0,
        height: 15,
        },
        shadowRadius: 11.95 ,
        elevation: 25,
    },
    button2: {
      flex: 1,
      backgroundColor: getSelectionMode == 2 ? THEME.COLORS.ALERT : THEME.COLORS.BACKGROUND_800_LIGHT,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: getSelectionMode == 2 ? THEME.COLORS.ALERT : THEME.COLORS.BACKGROUND_800_LIGHT,
      shadowOffset:{
        width: 0,
        height: 15,
        },
        shadowRadius: 11.95 ,
        elevation: 25,
    },
    })
  return (
    <View>
      <View
        style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={styles.button1}>
          <Text
            style={styles.textButton1}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={styles.button2}>
          <Text
            style={styles.textButton2}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;