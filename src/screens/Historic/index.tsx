import React, { useState , useEffect, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../../contexts/auth';
import { TouchableOpacity, View, Text, FlatList, TextInput } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../../utils/route';
import { Entypo } from '@expo/vector-icons';
import { MoviCard, RegisterProps} from '../../components/MoviCard';
import { FocusAwareStatusBar } from '../../components/StatusBar';
import { styles } from './styles';
import { THEME } from '../../../theme';
import { MagnifyingGlass } from 'phosphor-react-native';
import { Loading } from '../../components/Loading';
import { NullComponent } from '../../components/NullComponent';
import { months } from '../../utils/months';

interface MonthsProps {
  id: number;
  name: string;
}


export function Historic() {

  const { userAccountData } = useContext(AuthContext);

  const [ register, setRegister] = useState<RegisterProps[]>([]);

  const [ registerCopy, setRegisterCopy] = useState<RegisterProps[]>([]);

  const [ monthSelected, setMonthSelected ] = useState<MonthsProps>(months[0]);

  const [ typeRegisterSelected, setTypeRegisterSelected ] = useState<string>('entrada');

  const [ loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();


  function handleGoBack(){
    navigation.goBack()
  } 

  const handleSelectMonth = (par: MonthsProps) => {
        
    setMonthSelected(par);

}

  const handleSelectTypeRegister = (par : number) => {

    setTypeRegisterSelected(par == 1? 'entrada' : 'saida');
  };

  useEffect(() => {
    try{
      axios(`${baseUrl}/user/${userAccountData.id}/registers`).then(response =>{
        setRegister(response.data);
        setRegisterCopy(response.data);
      })
      setLoading(false)

    }catch(err){
      console.log(err);
      setLoading(false)
    }

  },[])

  function search(par: string){

    var arrayCopy = JSON.parse(JSON.stringify(registerCopy));
    
    setRegister(arrayCopy.filter((item : RegisterProps) =>
     item.description.includes(par) 
    || item.description.toLowerCase().includes(par) 
    || item.description.toUpperCase().includes(par) 
    || item.value.includes(par)
    ))

  }

  var allDataRegistered = register.map(register => {
    if(register.typeRegister == typeRegisterSelected && months[parseFloat(register.createdAt.slice(0 , 10).slice(5 , 7))-1 ] == monthSelected){
      return register
    }
  }).filter(function (i) {
    return i;
  })


  var categoriesDataFormated = allDataRegistered.filter((index, i) => allDataRegistered.indexOf(index) === i) as RegisterProps[];


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
        <View style={styles.containerMonths}>
        <FlatList 
          data={months}
          renderItem={({item})=>(
            <TouchableOpacity onPress={() => handleSelectMonth(item)} style={[styles.monthButton, {backgroundColor: item == monthSelected? THEME.COLORS.PRIMARY : THEME.COLORS.BACKGROUND_800_LIGHT}]}>
                <Text style={[styles.textMonth, {color: item == monthSelected? THEME.COLORS.TEXT_DARK : THEME.COLORS.TEXT_LIGHT}]}>{item.name}</Text>
            </TouchableOpacity>
          )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.containerSwitch}>
        <TouchableOpacity 
          onPress={()=> handleSelectTypeRegister(1)}  
          style={[styles.switchButton, {borderBottomColor: typeRegisterSelected == 'entrada'? THEME.COLORS.PRIMARY : THEME.COLORS.BACKGROUND_800_LIGHT}]}
        >
            <Text 
              style={[styles.textSwitch, {color: typeRegisterSelected == 'entrada'? THEME.COLORS.PRIMARY : THEME.COLORS.TEXT_LIGHT}]}
            >
              Entradas
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=> handleSelectTypeRegister(2)} 
          style={[styles.switchButton, {borderBottomColor: typeRegisterSelected == 'saida'? THEME.COLORS.PRIMARY : THEME.COLORS.BACKGROUND_800_LIGHT}]}
        >
            <Text 
              style={[styles.textSwitch, {color: typeRegisterSelected == 'saida'? THEME.COLORS.PRIMARY : THEME.COLORS.TEXT_LIGHT}]}
            >
              Saídas
            </Text>
        </TouchableOpacity>
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
          categoriesDataFormated.length != 0 ?
          <FlatList
            data={categoriesDataFormated}
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