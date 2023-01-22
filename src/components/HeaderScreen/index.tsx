import { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth';
import { View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import { EyeClosed,Eye, MoonStars, Question, User} from 'phosphor-react-native'
import { ButtonIcon } from '../ButtonIcon';
import { styles } from './styles';
import { THEME } from '../../../theme';


interface Props {
    iconsVisible: Boolean;
    changeVisible: (par:Boolean)=> void;
}
let {height, width} = Dimensions.get('window')
var latgerScreen = width > 450;

export function HeaderScreen({changeVisible, iconsVisible} : Props) {

    const { userSocialAccount } = useContext(AuthContext);

    const [visibility, setVisibility] = useState<boolean>(true);

    const handleVisibility = () => {

        setVisibility(!visibility)
        changeVisible(visibility)
    }

  return (
    <View style={styles.container}>
        <View style={styles.contentHeader}>
            <ButtonIcon background={THEME.COLORS.PRIMARY_LIGTH}>
               <Image
                  style={styles.userImage}
                  source={{uri: userSocialAccount?.photoUrl,}}
                  resizeMode={'cover'}
                />
            </ButtonIcon>
            <View style={styles.containerIconsHeader}>
                
               {iconsVisible?                 
               <TouchableOpacity
                    onPress={handleVisibility}
                >
                    {visibility? <Eye color={THEME.COLORS.TEXT_DARK}size={latgerScreen? 31 : 24}style={styles.iconHeader}/> : <EyeClosed color={THEME.COLORS.TEXT_DARK}size={latgerScreen? 31 : 24}style={styles.iconHeader}/>}
                </TouchableOpacity> : null} 


                <TouchableOpacity>
                    <Question 
                        color={THEME.COLORS.TEXT_DARK}
                        size={latgerScreen? 31 : 24}            
                        style={styles.iconHeader}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MoonStars
                        color={THEME.COLORS.TEXT_DARK}
                        size={latgerScreen? 31 : 24}            
                        style={styles.iconHeader}
                    />
                </TouchableOpacity>
            </View>
        </View>
        {iconsVisible?         
        <Text style={styles.userName}>
           Olá, {userSocialAccount?.firstName}
        </Text> : null}

    </View>
  );
}