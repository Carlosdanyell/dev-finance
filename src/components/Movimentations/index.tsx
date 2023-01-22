import { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import AuthContext from '../../contexts/auth';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { baseUrl } from '../../utils/route';
import { HeaderText } from '../HeaderText';
import { MoviCard, RegisterProps} from '../MoviCard';
import { NullComponent } from '../NullComponent';
import { styles } from './styles';
import { THEME } from '../../../theme';

interface Props {
  refresh: any;
}

export function Movimentations({ refresh } : Props) {

  const { userAccountData } = useContext(AuthContext);

 const [ register, setRegister ] = useState<RegisterProps[]>([])


  async function loadRegisters (){
    try{
      await axios(`${baseUrl}/user/${userAccountData.id}/registers`).then(response =>{
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