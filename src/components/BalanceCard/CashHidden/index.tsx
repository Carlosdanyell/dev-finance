import { ColorValue, View, Text} from 'react-native';
import Svg, { Circle} from "react-native-svg";
import { THEME } from '../../../../theme';
import { styles } from './styles';

interface Props {
    sizeIcon: number;
    color: ColorValue;
}

export function CashHidden({color, sizeIcon} : Props) {

    const size = (sizeIcon/2);

    return (
    <View style={styles.container}>
      <Text style={{
        fontSize: sizeIcon,
        fontFamily: THEME.FONT_FAMILY.MEDIUM,
        color: color,
      }}>
        {`R$ `}
      </Text>

      <Svg width={size + 5} height={size}>
        <Circle
          stroke={color}
          fill={color}
          cx={size/2}
          cy={size/2}
          r={size/2.5}
        />
      </Svg>
      <Svg width={size + 5} height={size}>
        <Circle
          stroke={color}
          fill={color}
          cx={size/2}
          cy={size/2}
          r={size/2.5}
        />
      </Svg>
      <Svg width={size + 5} height={size}>
        <Circle
          stroke={color}
          fill={color}
          cx={size/2}
          cy={size/2}
          r={size/2.5}
        />
      </Svg>
      <Svg width={size + 5} height={size}>
        <Circle
          stroke={color}
          fill={color}
          cx={size/2}
          cy={size/2}
          r={size/2.5}
        />
      </Svg>
      <Svg width={size + 5} height={size}>
        <Circle
          stroke={color}
          fill={color}
          cx={size/2}
          cy={size/2}
          r={size/2.5}
        />
      </Svg>
    </View>
  );
}