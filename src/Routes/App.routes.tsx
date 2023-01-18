import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './Tab.routes'
import { Historic } from '../screens/Historic';
import { Report } from '../screens/Report';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
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
            <Screen 
             name='report'
             component={Report}
            />
        </Navigator>
    )
}