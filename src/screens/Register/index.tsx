import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, useForm, FieldError} from "react-hook-form";
import CurrencyInput from 'react-native-currency-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as yup from "yup";
import axios from 'axios';
const baseUrl = 'http:192.168.0.10:3334';
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
  const { control, handleSubmit, formState: {errors}, reset} = useForm<dataModel>({
    resolver: yupResolver(schema)
  });

  const [ state ,setState] = useState<boolean>(false)

  const [ type, setType ] = useState<string>('entrada');
  
  const [ indiceSelected, setIndiceSelected] = useState<number>(0)

  const [ category, setCategory] = useState<PropsCategory>(categoriesIncomes[0])

  const navigation = useNavigation();
  

  const onSelectSwitch = (value: number) => {
    setTimeout(() => {
      if(value === 2){
        setType('saida')
        reset()
        setCategory(categoriesExpenses[0])

        if(category != categoriesExpenses[0]){
          return category
        }
      }else{
        setType('entrada')
        reset()
        setCategory(categoriesIncomes[0])

        if(category != categoriesIncomes[0]){
          return category
        }
      }
    },1000)
  };


   async function handleDataRegister (data: dataModel){

    data.typeRegister = type;
    data.category = category.title

    try {

      await axios.post(`${baseUrl}/user/42f67476-bc7d-4ebf-9b55-a4718acf2a25/registers`, {
        typeRegister: data.typeRegister,
        description: data.description,
        category: data.category,
        value: data.value.toString()
      }); 
    } catch(err){
      
        console.log(err);
        Alert.alert(
          "Ops...",
           `Houve algum erro ao registrar a ${data.typeRegister} ...`,
          [
            { text: "OK", onPress: () => navigation.navigate('home', {state}) }
          ]
        );
    }
    
    setState(!state)
    reset()
  };

  function handleGoBack(){
    navigation.goBack()
  };


  var element : any = renderTypeCategory(type).find(item => item == category)
  var formatedArrayCategories = changePosition(renderTypeCategory(type) , indiceSelected, 0);
  

  useEffect(() => {
    setIndiceSelected(renderTypeCategory(type).indexOf(element))
  },[category])

  function handleCategory(par: PropsCategory){
    if(par == category){
      return false
    }else{
      setCategory(par)
    }

    onClose()

    element = renderTypeCategory(type).find(item => item == category)
    return setIndiceSelected(renderTypeCategory(type).indexOf(element)) 
  };
  

  function renderTypeCategory (par: String){
    if(par == 'entrada'){
      return categoriesIncomes
    }else{
      return categoriesExpenses
    }
  };

  function changePosition(arr: any, from: number, to : number) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
  };

  
  const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
      modalizeRef.current?.open();
      Keyboard.dismiss()
    };
    const onClose = () => {
      modalizeRef.current?.close();
    };
    
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
                  size={20}
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
                        
                        {category?.icon(22 ,category?.color)}
                          <Text style={{marginLeft: 15, alignSelf: 'center'}}>{category?.title}</Text>
                        </View>
                        <View style={{flex: 1,alignItems: 'flex-end',paddingRight: 12}}>
                          <CaretRight
                            size={21}
                            color={category?.color}
                          />
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
        title={'Registrado!'}
        subtitle={`Sua ${type == 'entrada' ? 'entrada' : 'saída'} foi registrada com sucesso`}
        statusBarTranslucent
        transparent
        visible={state}
        buttonPatternFunc={() => {
          setState(!state)

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
            {
              formatedArrayCategories.map((categories: any) => (
                <TouchableOpacity 
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
                </TouchableOpacity>
              ))
            }
        </View>
        </Modalize>
    </SafeAreaView>


  );
};