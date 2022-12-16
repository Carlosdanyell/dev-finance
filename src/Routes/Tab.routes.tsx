import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useKeyboard } from '@react-native-community/hooks'

import { useNavigation } from '@react-navigation/native';
const { Screen, Navigator } = createBottomTabNavigator(); 

import { Home } from '../screens/Home';
import { Planning } from '../screens/Planning';
import { Register } from '../screens/Register';
import { Historic } from '../screens/Historic';

import { House, Strategy } from 'phosphor-react-native';
import { IconPlus } from '../components/IconPlus';
import { THEME } from '../../theme';



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
                height: 65,
                paddingVertical: 8,
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
                fontSize: THEME.FONT_SIZE.XM,
                marginBottom: 8,
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
                        size={32}
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
                        size={32}
                    />
                    ),
                }}
            /> 
        </Navigator>
    );
};