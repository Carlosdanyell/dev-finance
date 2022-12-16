import React, {useState} from 'react';
import {TouchableOpacity,View, Text,} from 'react-native';


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

  return (
    <View>
      <View
        style={{
          height: 56,
          width: '90%',
          borderRadius: 30,
          borderWidth: 1,
          borderColor: THEME.COLORS.TEXT_LIGHT,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
          alignSelf: 'center',
          marginTop: 20
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
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
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? THEME.COLORS.TEXT_DARK: THEME.COLORS.TEXT_LIGHT,
              fontFamily: THEME.FONT_FAMILY.MEDIUM,
              fontSize: THEME.FONT_SIZE.MD,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
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
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? THEME.COLORS.TEXT_DARK: THEME.COLORS.TEXT_LIGHT,
              fontFamily: THEME.FONT_FAMILY.MEDIUM,
              fontSize: THEME.FONT_SIZE.MD,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;