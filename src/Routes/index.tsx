import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack.routes';

import { TabRoutes } from './Tab.routes';


export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}