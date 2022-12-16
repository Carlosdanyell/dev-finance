import { ColorValue, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps{
 background?: ColorValue;
}

export function ButtonIcon({background, ...rest} : Props) {
  return (
    <TouchableOpacity 
    style={[styles.buttonIcon,{backgroundColor: background}]}
    {...rest}
    >
    </TouchableOpacity>
  );
}