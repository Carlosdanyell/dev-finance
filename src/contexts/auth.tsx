import React,{ createContext, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import { UserDataAccountProps, UserProps } from "../@types/@user";
import axios from 'axios';
import { baseUrl } from '../utils/route';
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthResponse = {
    params: {
      access_token: string;
    };
    type: string;
}

interface AuthContextData {
    loading: boolean;
    signed: boolean;
    handleUserAccont(): Promise<void>;
    userSocialAccount: UserDataAccountProps | null;
    handleUserAuthSignIn(): Promise<void>;
    userAccountData: UserProps;
    handleDeleteUserLocalAccount(): Promise<void>;
}



const AuthContext = createContext<AuthContextData>({} as AuthContextData);



export function AuthProvider ({ children }: any){
 
    const [ accountData, setAccountData ] = useState<UserDataAccountProps | null>(null)

    const [ loadingStatus, setLoadingStatus ] = useState<boolean>(false);

    const [ userData, setUserData] = useState<UserProps>({} as UserProps);

    const [ userSigned, setUserSigned] = useState<boolean>(false);


    async function handleUserAccontLocal (){

      var response = await AsyncStorage.getItem("@devfinance:userData");

      var data = response? JSON.parse(response) : null
      
      if(data != ''){
        setAccountData(data);
      }
    }
    
    async function handleDeleteUserAccont (){

     await AsyncStorage.removeItem("@devfinance:userData");
     setAccountData(null)
    }

   useEffect(() => {
    handleUserAccontLocal()
   },[])

    async function handleGoogleData(){
        try {
           
          setLoadingStatus(true);

          const CLIENT_ID = "462645487678-h6db7ie3onqagvu6hf8l80s5gbumh435.apps.googleusercontent.com";
          const REDIRECT_URI = "https://auth.expo.io/@carlosdanyell/devfinance";
          const SCOPE = encodeURI("profile email");
          const RESPONSE_TYPE = "token";
    
          const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    
          const { type, params } = await AuthSession.startAsync({  authUrl }) as AuthResponse;
    
    
          if(type === 'success'){
    
            const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
            const user : any  = await response.json();
       
            const userAccountFormated : UserDataAccountProps = {
              fullName: user.name,
              firstName: user.given_name,
              email: user.email,
              photoUrl: user.picture
            };
            
            setAccountData(userAccountFormated);

            await AsyncStorage.setItem("@devfinance:userData", JSON .stringify(userAccountFormated));

            setLoadingStatus(false);
          }
        }catch (error) {
          console.log(error)
          setAccountData(null)
          setLoadingStatus(false)
        }
    
      };

      async function handleSignIn() {
        try {
          await axios.get(`${baseUrl}/user/id/${accountData?.fullName}/${accountData?.email}`).then(response =>{
            setUserData(response.data);
            setUserSigned(true);
          })
         
        }catch (error) {
          console.log(error);
          setAccountData(null)
          setUserSigned(false);
        }
       };

    return(
        <AuthContext.Provider value={
          {
            loading: loadingStatus,
            signed: userSigned,
            handleUserAccont: handleGoogleData,
            userSocialAccount: accountData,
            handleUserAuthSignIn: handleSignIn,
            userAccountData: userData,
            handleDeleteUserLocalAccount: handleDeleteUserAccont
          }
          }>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;