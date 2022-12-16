import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { VictoryPie } from 'victory-native'
import axios from 'axios';
const baseUrl = 'http:192.168.0.10:3334';

import { HeaderText } from '../HeaderText';
import { categoriesExpenses} from '../../utils/categories'
import { NullComponent } from '../NullComponent';
import { RegisterProps } from '../MoviCard';
import { styles } from './styles';

interface Props {
  refresh: any
};

export function StatsCard({ refresh } : Props) {
  const [ register, setRegister] = useState<RegisterProps[]>([]);

  useEffect(() => {
    try{
      axios(`${baseUrl}/user/42f67476-bc7d-4ebf-9b55-a4718acf2a25/registers`).then(response =>{
        setRegister(response.data);
      })

    }catch(err){
      console.log(err);
    }

  },[refresh])


  var allExpensesRegistered = register.map(register => {
    if(register.typeRegister == 'saida'){
      return register.category
    }
  }).filter(function (i) {
    return i;
  })
 
  var categoriesExpensesFormated = allExpensesRegistered.filter((index, i) => allExpensesRegistered.indexOf(index) === i);
 


  var dataCategories = categoriesExpensesFormated.map(category => {

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
    
    var colorCategory = categoriesExpenses.map(item => {
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

  let arrNull = [
    { 
      categoryX : '',
      amountValue : 1,
      color : '#202020'
    },
  ]

  var amountValue = 0;
  for(var i = 0; i < dataCategories.length; i++) {
      amountValue += dataCategories[i].amountValue;
  }
  var newDataCategories = JSON.parse(JSON.stringify(dataCategories));


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <HeaderText 
             title={'Despesas por categoria'}
             subtitle={'Resumo de gastos'}   
            />  
      </View>
      <View style={styles.content}>
        { 
          dataCategories.length != 0 ?   
          <View style={styles.victoryPie}> 
          <VictoryPie
          name = "ExpenseResume"
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
                <Text style={styles.label}>
                  {item.categoryX}
                </Text>
                <Text style={styles.label}>
                  {`${((item.amountValue / amountValue) * 100).toFixed(2)} %`}
                </Text>
              </View>
            </View>
            )
            
          }
        </View>:
        <NullComponent 
         description={'Ainda não há nenhuma despesa'}
        />
       }
        
        
      </View>
    </View>
  );
}