import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useKeyboard } from '@react-native-community/hooks'
import { useNavigation } from '@react-navigation/native';
import { Home } from '../screens/Home';
import { Planning } from '../screens/Planning';
import { Register } from '../screens/Register';
import { House, Strategy } from 'phosphor-react-native';
import { IconPlus } from '../components/IconPlus';
import { THEME } from '../../theme';
import { Dimensions } from 'react-native';



const { Screen, Navigator } = createBottomTabNavigator();

let {height, width} = Dimensions.get('window')
var latgerScreen = width > 450;

export function TabRoutes (){

    const keyboard = useKeyboard()
    const navigator = useNavigation();
    
    function nav(){
        navigator.navigate('historic')
      };
    
    return(
        <Navigator 
        screenOptions={{
            tabBarShowLabel:true,
            headerShown: false,
            tabBarHideOnKeyboard:true,
            tabBarStyle:{
                borderTopColor: THEME.COLORS.BACKGROUND_900_LIGHT,
                backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT,
                height: latgerScreen? 82 : 65,
                paddingVertical: latgerScreen? 10 : 8,
                shadowColor: THEME.COLORS.SHADOW_400,
                shadowOffset:{
                width: 0,
                height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
                elevation: 18,
            },   
 
            tabBarActiveTintColor:THEME.COLORS.PRIMARY,
            tabBarLabelStyle:{
                color: THEME.COLORS.TEXT_LIGHT,
                fontSize: latgerScreen? 15 : 12,
                marginBottom: latgerScreen? 10 : 8,
            },
        }}>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({color}) => (
                       <House
                        color={color}
                        size={latgerScreen? 40 : 32}
                       />
                    ),
                }}
            />

            <Screen
                name='newRegister'
                component={Register}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <IconPlus focused={focused}/>
                    ),
                    tabBarIconStyle:{
                        marginBottom: keyboard.keyboardShown? -20 : 20,
                        backgroundColor: 'red'
                    },
                    tabBarStyle:{
                        display: 'none'
                    }
                }}
            /> 

            <Screen
                name='plannig'
                component={Planning}
                options={{
                    tabBarLabel: 'Planejamento',
                    tabBarIcon: ({color}) => (
                    <Strategy
                        color={color}
                        size={latgerScreen? 40 : 32}
                    />
                    ),
                }}
            /> 
        </Navigator>
    );
};