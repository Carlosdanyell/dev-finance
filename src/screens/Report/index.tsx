import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, Dimensions, Text} from 'react-native';
import { ThemeProvider, useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'
import { FocusAwareStatusBar } from '../../components/StatusBar';
import { months } from '../../utils/months';
import { THEME } from '../../../theme';
import { styles } from './styles';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { NullComponent } from '../../components/NullComponent';
import { VictoryPie } from 'victory-native';
import { HeaderText } from '../../components/HeaderText';
import { categoriesExpenses, categoriesIncomes } from '../../utils/categories';
import AuthContext from '../../contexts/auth';
import { RegisterProps } from '../../components/MoviCard';
import axios from 'axios';
import { baseUrl } from '../../utils/route';
import { maskCurrency } from '../../utils/mask';

interface MonthsProps {
     id: number;
     name: string;
}
interface DataProps {
  data: RegisterProps
}


export function Report() {

    let { width } = Dimensions.get('window')
    var latgerScreen = width > 450;

    const [ monthSelected, setMonthSelected ] = useState<MonthsProps>(months[0]);

    const [ typeRegisterSelected, setTypeRegisterSelected ] = useState<string>('entrada');

    const { userAccountData } = useContext(AuthContext);

    const [ register, setRegister] = useState<RegisterProps[]>([]);



    const navigator = useNavigation();

    const handleGoBack = () => {
        navigator.goBack();
    };


    const handleSelectMonth = (par: MonthsProps) => {
        
        setMonthSelected(par);

    }

    const handleSelectTypeRegister = (par : number) => {

      setTypeRegisterSelected(par == 1? 'entrada' : 'saida')

    };
    var typeRegisterText = typeRegisterSelected == 'entrada'? 'Receitas' : 'Despesas';

// Script stats


useEffect(() => {
  try{
    axios(`${baseUrl}/user/${userAccountData.id}/registers`).then(response =>{
      setRegister(response.data);
    })

  }catch(err){
    console.log(err);
  }

},[monthSelected,typeRegisterSelected])


var allDataRegistered = register.map(register => {
  if(register.typeRegister == typeRegisterSelected && months[parseFloat(register.createdAt.slice(0 , 10).slice(5 , 7))-1 ] == monthSelected){
    return register.category
  }
}).filter(function (i) {
  return i;
})

var categoriesDataFormated = allDataRegistered.filter((index, i) => allDataRegistered.indexOf(index) === i);

var dataCategories = categoriesDataFormated.map(category => {

  var value =  register.map(register => {

    if(register.category == category){
        var value = parseFloat(register.value);
        return value;
    }else{
        return 0
    } 
  })

  var amontValueCategory = 0;
      for(var i = 0; i < value.length; i++) {
        amontValueCategory += value[i];
      }
  

      var typeCategory = typeRegisterSelected == 'entrada'? categoriesIncomes : categoriesExpenses;


  var colorCategory = typeCategory.map(item => {
    if(item.title == category){
      return item.color
    }
  }).filter(function (i) {
    return i;
  })[0];

 return {
    categoryX : category,
    amountValue : amontValueCategory,
    color : colorCategory
  }
})



var amountValue = 0;
for(var i = 0; i < dataCategories.length; i++) {
    amountValue += dataCategories[i].amountValue;
}
var newDataCategories = JSON.parse(JSON.stringify(dataCategories));


  return (
    <SafeAreaView>
    <FocusAwareStatusBar barStyle="dark-content" backgroundColor={THEME.COLORS.BACKGROUND_800_LIGHT } translucent/>
     <ScrollView showsHorizontalScrollIndicator={false}>
     <View style={styles.container}>
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
            Relatórios
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


        <View style={styles.containerStats}>
          <View style={styles.headerStats}>
            <HeaderText 
              title={`${typeRegisterText} por categoria`}
              subtitle={`Resumo de ${typeRegisterText.toLowerCase()}`}   
            />  
          </View>
          <View style={styles.content}>
            { 
              dataCategories.length != 0 ?   
              <View style={styles.victoryPie}> 
              <VictoryPie
              name = "ExpenseResume"
              animate={{ duration: 90, easing: "elasticIn" }}
              data={dataCategories}
              x={"categoryX"}
              y={"amountValue"}
              colorScale={dataCategories.map(item => item.color)}
              innerRadius={50}
              width={270}
              height={270}
              padding={30}
              style={{
                labels: {
                  display: 'none',
                }
              }}
              /> 
              </View> :  <View></View>
            }
            {
              dataCategories.length != 0 ? 
              <View>
                <View style={styles.containerLabels}>
                  {newDataCategories.sort(function compare(a : any, b : any) {
                      if (a.amountValue > b.amountValue) return -1;
                      if (a.amountValue < b.amountValue) return 1;
                      return 0;
                  }).map((item : any) => 
                      <View key={item.categoryX} style={styles.labelContent}>
                        <View style={[styles.labelIndicator, {backgroundColor: item.color}]}>
                        </View>
                        <View style={styles.containerLabel}>
                          <View style={styles.box1}>
                            <Text style={styles.label}>
                            {item.categoryX}
                            </Text>
                            <View style={styles.containerPercentBar}>
                              <View style={[styles.percentBar, {width: `${Math.round(((item.amountValue / amountValue) * 100))}%`, backgroundColor: item.color}]}></View>
                            </View>
                          </View>
                          
                          <View style={styles.box2}>
                          <Text style={styles.InfoAmountValue}>
                              {`R$ ${maskCurrency(item.amountValue.toFixed(2))}`}
                            </Text>
                            <Text style={styles.InfoPercentValue}>
                              {`${((item.amountValue / amountValue) * 100).toFixed(2).replace('.' , ',')} %`}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )
                    
                  }
                </View>

                <View style={styles.resumeContainer}>
                  <Text style={styles.resumeTitle}>{`Total de ${typeRegisterText.toLowerCase()} no mês de ${monthSelected.name.toLowerCase()}`}</Text>
                  <Text style={styles.resumeValue}>{` R$ ${maskCurrency(amountValue.toFixed(2))}`}</Text>
                </View>
              </View>
              :
              <NullComponent
              description={'Ainda não há nenhum registro '}
              />
             }
  
          </View>
        </View>
      </View>
     </ScrollView>
    </SafeAreaView>
  );
}