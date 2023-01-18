import React, { useState, useRef, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, KeyboardAvoidingView, Keyboard, ScrollView, Alert, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../../contexts/auth';
import { Controller, useForm, FieldError} from "react-hook-form";
import CurrencyInput from 'react-native-currency-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as yup from "yup";
import axios from 'axios';
import { baseUrl } from '../../utils/route';
import { Entypo } from '@expo/vector-icons'
import { FocusAwareStatusBar } from '../../components/StatusBar';
import CustomSwitch  from '../../components/CustomSwitch';
import { HeaderText } from '../../components/HeaderText';
import { ModalAlert } from '../../components/ModalAlert';
import { categoriesExpenses, categoriesIncomes } from '../../utils/categories';
import { Modalize } from 'react-native-modalize';


import { styles } from './styles';
import { THEME } from '../../../theme';
import { CaretRight, Check, MagnifyingGlass } from 'phosphor-react-native';



interface dataModel {
  typeRegister: string;
  description: string;
  category: string;
  value: string
}

interface ERROR {
  error?: FieldError;
}

interface PropsCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
}

const schema = yup.object({
  description: yup.string().required('Insira uma descrição.'),
  value: yup.number().required('Insira um valor.').positive("O campo deve ser positivo.")
})


export function Register() {

  const { userAccountData } = useContext(AuthContext);

  const { control, handleSubmit, formState: {errors}, reset} = useForm<dataModel>({
    resolver: yupResolver(schema)
  });

  const [ state ,setState] = useState<boolean>(false);

  const [ sucessToRegister ,setSucessToRegister] = useState<boolean>(false);

  const [ type, setType ] = useState<string>('entrada');

  const [ category, setCategory] = useState<PropsCategory>(categoriesIncomes[0]);

  const navigation = useNavigation();
  

  let {height, width} = Dimensions.get('window')
  var latgerScreen = width > 450;

  function handleGoBack(){
    navigation.goBack()
  };

  async function handleDataRegister (data: dataModel){

    data.typeRegister = type;
    data.category = category.title

    try {

      await axios.post(`${baseUrl}/user/${userAccountData.id}/registers`, {
        typeRegister: data.typeRegister,
        description: data.description,
        category: data.category,
        value: data.value.toString()
      }); 

      setSucessToRegister(true)
      setState(!state);

    } catch(err){

      setSucessToRegister(false)
      setState(!state);
        console.log(err);
    }
   
    reset()
  };


  const onSelectSwitch = (value: number) => {

      if(value === 2){
        if(type === 'saida'){
          return
        }
        setType('saida');
        reset()
        setCategory(categoriesExpenses[0])

        if(category != categoriesExpenses[0]){
          return category
        }
      }else if(value === 1){
        if(type === 'entrada'){
          return
        }
        setType('entrada');
        reset()
        setCategory(categoriesIncomes[0])

        if(category != categoriesIncomes[0]){
          return category
        }
      }

  };



  const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
      modalizeRef.current?.open();
      Keyboard.dismiss()
    };

    const onClose = () => {
      modalizeRef.current?.close();
    };



    function handleCategory(par: PropsCategory){
      if(par == category){
        return false
      }else{
        setCategory(par)
      }
  
      onClose()
    };

//   const reorderArray = (arr: any, index: number): any[] => {
//     const newArray = [...arr];
//     const targetElement = newArray.splice(index, 1)[0];
//     newArray.unshift(targetElement);
//     return newArray;
// }

//   var formatedArrayCategoriesIncomes = reorderArray(categoriesIncomes , indiceSelected);


  return (
    <SafeAreaView>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME.COLORS.BACKGROUND_800_LIGHT } translucent/>
      <KeyboardAvoidingView>
        <View style={{backgroundColor: THEME.COLORS.BACKGROUND_900_LIGHT, }}>
          <ScrollView keyboardShouldPersistTaps='handled' style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
                <Entypo
                  name="chevron-thin-left"
                  color={THEME.COLORS.TEXT_LIGHT}
                  size={latgerScreen? 25 : 20}
                />
            </TouchableOpacity>
            <View style={{flex: 1,marginRight: 20}}>
              <Text style={styles.headerTitle}>
                Novo Registro
              </Text>
            </View>
          </View>

            <View style={styles.headerContainer}>
              <Text style={styles.labelText}>
                      Registrar
              </Text>
              <CustomSwitch
                  selectionMode={1}
                  option1={'Receitas'}
                  option2={'Despesas'}
                  onSelectSwitch={onSelectSwitch}
                  selectionColor={THEME.COLORS.PRIMARY}
              />
            </View>

            <View style={styles.containerRegisterOperation}>
              <View style={styles.headerContent}>
                <HeaderText
                  title={'Movimentação'}
                  subtitle={`Descreva os detalhes da ${type == 'entrada' ? 'receita' : 'despesa'}`}
                />
              </View>
              
              <View style={styles.mainContent}>
                <View style={styles.containerInput}>
                  <Text style={styles.labelText}>
                    Descrição
                  </Text>
                  <Controller 
                    name='description'
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                          clearButtonMode='always'
                          style={styles.input}
                          selectionColor={THEME.COLORS.TEXT_LIGHT}
                          placeholder={'Detalhe a operação'}
                          maxLength={45}     
                          onChangeText={onChange}
                          value={value}         
                        />
                    )}
                    />
                    {errors.description && <Text style={styles.errorText}>{errors.description?.message}</Text>}
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.labelText}>
                    Categoria
                  </Text>
                  <TouchableOpacity onPress={onOpen}>
                  <View style={styles.input}>

                      <View style={[styles.category,{borderColor: category?.color}]}>
                        {category?.icon(latgerScreen? 28 : 22 ,category?.color)}
                        <Text style={styles.titleCategoryButton}>{category?.title}</Text>
                      </View>
                      
                      <View style={{flex: 1,alignItems: 'flex-end',paddingRight: 12}}>
                        <CaretRight size={latgerScreen? 28 : 21} color={category?.color}/>
                      </View>
                  </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.labelText}>
                    Valor da {type == 'entrada' ? 'receita' : 'despesa'}
                  </Text>
                  <View style={styles.inputValue}> 
                    <Text style={styles.labelReal}>R$ </Text>
                    <Controller 
                      name='value'
                      control={control}
                      render={({field: {onChange, value}}) => (    
                        <CurrencyInput
                          clearButtonMode='always'
                          style={styles.valueInput}
                          selectionColor={THEME.COLORS.TEXT_LIGHT}
                          value={value}
                          onChangeValue={onChange}
                          delimiter="."
                          separator=","
                          precision={2}
                          minValue={0}
                          maxValue={10000000}
                        />
                      )}
                    />
                  </View>
                  {errors.value && <Text style={styles.errorText}>{errors.value?.message}</Text>}
                </View>

                <TouchableOpacity 
                  style={[
                    styles.submitButton,
                    {
                      backgroundColor: type == 'entrada' ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT,
                      shadowColor:type == 'entrada' ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT, 
                    }
                  ]}
                  onPress={handleSubmit(handleDataRegister)}
                >
                  <Text style={styles.textButton}>Registrar</Text>
                </TouchableOpacity>
                
              </View>
            
            </View>
          </ScrollView> 
        </View>
      </KeyboardAvoidingView>

      <ModalAlert
        title={
          sucessToRegister ? 'Registrado!' : 'Erro ao registrar'
        }
        subtitle={
          sucessToRegister ? `Sua ${type == 'entrada' ? 'entrada' : 'saída'} foi registrada com sucesso` 
          : `Houve um erro ao registrar a ${type == 'entrada' ? 'entrada' : 'saída'}`
        }
        statusBarTranslucent
        transparent
        visible={state}
        colorButton={sucessToRegister? THEME.COLORS.SUCCESS: THEME.COLORS.ALERT}
        buttonPatternFunc={() => {

          setState(!state);

          setTimeout(() => {
            navigation.navigate('home', {state})
          }, 800);  
        }}
      />
        <Modalize     
          ref={modalizeRef}
          handlePosition='inside'
          snapPoint={600}
          HeaderComponent={
            <View style={styles.headerModalize}>
              <Text style={styles.textHeaderModalize}>
                {`Selecione a categoria da ${type == 'entrada' ? 'entrada' : 'saída'}`}
              </Text>
            </View>
          }
        >
            <View>
            {type == 'entrada'?
              categoriesIncomes.map((categories: PropsCategory) => (
                <TouchableNativeFeedback 
                  key={categories.id}
                  onPress={()=> handleCategory(categories) }
                >
                  <View style={styles.cardCategory}>
                    <View style={[styles.iconCategory,{backgroundColor: categories.color}]}>
                      {categories.icon(22 ,THEME.COLORS.TEXT_DARK)}
                    </View>
                    
                    <Text style={styles.titleCategory}>
                      {categories.title}
                    </Text>
                    <View> 
                      {
                        categories == category ?
                        <View style={styles.selected}>
                          <Check color={THEME.COLORS.TEXT_DARK} size={12} weight={'bold'}/>
                        </View> :
                          <View></View>
                      }
                    </View>
                  </View>
                </TouchableNativeFeedback>
              )):
              categoriesExpenses.map((categories: PropsCategory) => (
                <TouchableNativeFeedback 
                  key={categories.id}
                  onPress={()=> handleCategory(categories) }
                >
                  <View style={styles.cardCategory}>
                    <View style={[styles.iconCategory,{backgroundColor: categories.color}]}>
                      {categories.icon(22 ,THEME.COLORS.TEXT_DARK)}
                    </View>
                    
                    <Text style={styles.titleCategory}>
                      {categories.title}
                    </Text>
                    <View> 
                      {
                        categories == category ?
                        <View style={styles.selected}>
                          <Check color={THEME.COLORS.TEXT_DARK} size={12} weight={'bold'}/>
                        </View> :
                          <View></View>
                      }
                    </View>
                  </View>
                </TouchableNativeFeedback>
              ))
            }
        </View>
        </Modalize>
    </SafeAreaView>


  );
};