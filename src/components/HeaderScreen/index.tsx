import { View, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { EyeClosed,Eye, MoonStars, Question, User} from 'phosphor-react-native'

import { ButtonIcon } from '../ButtonIcon';

import { styles } from './styles';
import { THEME } from '../../../theme';


interface Props {
    iconsVisible: Boolean;
    changeVisible: (par:Boolean)=> void;
}

export function HeaderScreen({changeVisible, iconsVisible} : Props) {
    const [visibility, setVisibility] = useState<boolean>(true);

    const handleVisibility = () => {

        setVisibility(!visibility)
        changeVisible(visibility)
    }

  return (
    <View style={styles.container}>
        <View style={styles.contentHeader}>
            <ButtonIcon background={THEME.COLORS.PRIMARY_LIGTH}>
                <User 
                    color={THEME.COLORS.TEXT_DARK}
                    size={27}        
                />
            </ButtonIcon>
            <View style={styles.containerIconsHeader}>
                
               {iconsVisible?                 
               <TouchableOpacity
                    onPress={handleVisibility}
                >
                    {visibility? <Eye color={THEME.COLORS.TEXT_DARK}size={27}style={styles.iconHeader}/> : <EyeClosed color={THEME.COLORS.TEXT_DARK}size={27}style={styles.iconHeader}/>}
                </TouchableOpacity> : null} 


                <TouchableOpacity>
                    <Question 
                        color={THEME.COLORS.TEXT_DARK}
                        size={27}            
                        style={styles.iconHeader}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MoonStars
                        color={THEME.COLORS.TEXT_DARK}
                        size={27}            
                        style={styles.iconHeader}
                    />
                </TouchableOpacity>
            </View>
        </View>
        {iconsVisible?         
        <Text style={styles.userName}>
           Olá, Carlos
        </Text> : null}

    </View>
  );
}