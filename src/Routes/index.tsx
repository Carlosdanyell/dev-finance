import React,{ useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './App.routes';
import { AuthRoutes } from './Auth.routes';
import  AuthContext from '../contexts/auth';


export function Routes(){
  
    const { signed } = useContext(AuthContext)

    return(
        <NavigationContainer>
            {
                !signed?
                <AuthRoutes />:
                <AppRoutes />
            }
        </NavigationContainer>
    );
}