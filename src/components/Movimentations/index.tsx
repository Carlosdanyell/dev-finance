import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
const baseUrl = 'http:192.168.0.10:3334';

import { HeaderText } from '../HeaderText';
import { MoviCard, RegisterProps} from '../MoviCard';
import { NullComponent } from '../NullComponent';

import { styles } from './styles';


interface Props {
  refresh: any;
  title: string;
  subtitle: string;
}

export function Movimentations({refresh, title, subtitle}: Props) {
 const [ register, setRegister ] = useState<RegisterProps[]>([])


  async function loadRegisters (){
    try{
      await axios(`${baseUrl}/user/42f67476-bc7d-4ebf-9b55-a4718acf2a25/registers`).then(response =>{
        setRegister(response.data)
      })
    }catch(err){
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Ops',
        text2: 'Houve um erro ao registrar'
      });
    }
  }

  useEffect(() => {
    loadRegisters()
  },[refresh])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderText 
            title={title}
            subtitle={subtitle}
        />  
      </View>
      <View style={styles.containerMovimentation}>

      {
      register.length != 0 ? register.slice(0, 2).map(register => <MoviCard key={register.id} data={register}/>):
       <NullComponent 
        description={'Ainda não há Movimentações'}
       />
       }
  
      </View>

    </View>
  );
}