import React,{ useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import  AuthContext from '../../contexts/auth';
import { FocusAwareStatusBar } from '../../components/StatusBar';
import { Loading } from '../../components/Loading';
import { UserProps } from '../../@types/@user';
import { ArrowRight } from 'phosphor-react-native'
import { THEME } from '../../../theme';
import { styles } from './styles';



export function SignIn() {
 
  const { loading, handleUserAccont, userSocialAccount, handleUserAuthSignIn, handleDeleteUserLocalAccount } = useContext(AuthContext);

 
  async function handleGoogleData (){
    try {
          handleUserAccont();

          
    }catch (error) {
      console.log(error)
    }
    
   };

   async function handleUserAuth() {
    try {
      handleUserAuthSignIn();
     
    }catch (error) {
      console.log(error)
    }
   };

  return (
    <SafeAreaView>
    <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME.COLORS.BACKGROUND_900_LIGHT } translucent/>
     <View style={styles.container}>

        {
            !userSocialAccount ?
            
        <View>
          <View style={[styles.header ,{opacity: loading? 0.6 :1}]}>
            <Text style={styles.title}>
                 Acessar sua conta
            </Text>
            <Text style={styles.subtitle}>
                Tenha o controle de suas finanças na palma da mão
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleGoogleData()} style={[styles.socialButton, {opacity: loading? 0.8 :1}]}>   
            <View style={styles.buttonContainer}>
              <Image 
                source={require('../../assets/google.png')} 
                resizeMode={'cover'}
                style={styles.googleLogo}
              /> 
              <Text style={styles.textSocialButton}>
                Entrar com google
              </Text>
            </View>
          </TouchableOpacity>
          <Loading color={THEME.COLORS.PRIMARY} size={50} visibility={loading}/>
          <TouchableOpacity style={[styles.socialButton, {opacity: loading? 0.6 :1}]}>
            <View style={styles.buttonContainer}> 
              <Image 
                source={require('../../assets/facebook.png')} 
                resizeMode={'cover'}
                style={styles.facebookLogo}
              />
              <Text style={styles.textSocialButton}>
                Entrar com facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View> : 
          
          <View style={styles.containerWelcome}>
               <Image
                  style={styles.userImage}
                  source={{uri: userSocialAccount.photoUrl,}}
                  resizeMode={'cover'}
                />
                <Text style={styles.welcomeText}> 
                  Olá, {userSocialAccount.firstName} 😄
                </Text>
          </View>
        }
        
        <TouchableOpacity 
          onPress={()=> handleUserAuth()} 
          disabled={!userSocialAccount} 
          style={[styles.loginButton, {opacity: !userSocialAccount? 0.7 : 1}]
        }>
          
          <Text style={styles.textButtonLogin}>
              Entrar
          </Text>
          <ArrowRight 
           color={THEME.COLORS.TEXT_DARK}
           size={22}
          />
        </TouchableOpacity>
        {   
        !userSocialAccount ?
        <View></View> :
        <TouchableOpacity onPress={()=> handleDeleteUserLocalAccount()} style={styles.handleOtherAccountButton}>
        
        <Text style={styles.textButtonHandleOtherAccount}>
            Usar outra conta
        </Text>
      </TouchableOpacity>
        }
     </View> 
    </SafeAreaView>
    
  );
}
