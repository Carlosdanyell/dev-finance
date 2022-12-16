import React, { useState , useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View, Text, FlatList, TextInput } from 'react-native';
import axios from 'axios';
const baseUrl = 'http:192.168.0.10:3334';
import { Entypo } from '@expo/vector-icons';
import { MoviCard, RegisterProps} from '../../components/MoviCard';
import { FocusAwareStatusBar } from '../../components/StatusBar';
import { styles } from './styles';
import { THEME } from '../../../theme';
import { MagnifyingGlass } from 'phosphor-react-native';
import { Loading } from '../../components/Loading';
import { NullComponent } from '../../components/NullComponent';




interface Props {
  refresh: boolean
};


export function Historic({ refresh } : Props) {
  const [ register, setRegister] = useState<RegisterProps[]>([]);

  const [ registerCopy, setRegisterCopy] = useState<RegisterProps[]>([]);

  const [ loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();

  const route = useRoute();

  function handleGoBack(){
    navigation.goBack()
  } 

  useEffect(() => {
    try{
      axios(`${baseUrl}/user/42f67476-bc7d-4ebf-9b55-a4718acf2a25/registers`).then(response =>{
        setRegister(response.data);
        setRegisterCopy(response.data);
      })
      setLoading(false)

    }catch(err){
      console.log(err);
      setLoading(false)
    }

  },[refresh])

  function search(par: string){

    var arrayCopy = JSON.parse(JSON.stringify(registerCopy));
    
    setRegister(arrayCopy.filter((item : RegisterProps) =>
     item.description.includes(par) 
    || item.description.toLowerCase().includes(par) 
    || item.description.toUpperCase().includes(par) 
    || item.value.includes(par)
    ))

  }

  return (
    <SafeAreaView style={{backgroundColor: THEME.COLORS.BACKGROUND_800_LIGHT, flex: 1}}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="transparent"  translucent/>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.TEXT_LIGHT}
                size={20}
              />
          </TouchableOpacity>
          <View style={{flex: 1,marginRight: 20}}>
            <Text style={styles.headerTitle}>
              Histórico de movimentações
            </Text>
          </View>
        </View>
        <View style={styles.headerInput}>
            <MagnifyingGlass 
             size={27}
             color={THEME.COLORS.TEXT_LIGHT}
            />
            <TextInput
              style={styles.input}
              selectionColor={THEME.COLORS.TEXT_LIGHT}
              placeholder={'Buscar'}
              maxLength={45}  
              onChangeText={(par) => search(par)}   
              autoCapitalize={'none'}        
            />
         </View>
        {
        loading?  
          <Loading 
          size={50}
          color={THEME.COLORS.PRIMARY}
          /> : 
          register.length != 0 ?
          <FlatList
            data={register}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.cardMovimentation}>
                <MoviCard key={item.id} data={item}/>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />:
          <NullComponent
           description={'Ainda não há nenhum movimentações'}
          />

        }
        
    </SafeAreaView>

  );
}