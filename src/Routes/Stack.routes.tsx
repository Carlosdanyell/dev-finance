import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './Tab.routes'

import { Historic } from '../screens/Historic';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="main"
                component={TabRoutes}
            />

            <Screen
                name="historic"
                component={Historic}
            />
        </Navigator>
    )
}