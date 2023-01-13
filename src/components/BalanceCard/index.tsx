import { View, Text } from 'react-native';
import { useEffect, useState, useContext} from 'react';
import AuthContext from '../../contexts/auth';
import { formatNumber } from '../../../node_modules/react-native-currency-input';
import axios from 'axios';
import { baseUrl } from '../../utils/route';
import { ArrowUp, ArrowDown } from 'phosphor-react-native'
import { CashHidden } from './CashHidden'
import { RegisterProps} from '../MoviCard';
import { styles } from './styles';
import { THEME } from '../../../theme';



interface Props {
    visible: Boolean;
    refresh: any;
}


export function BalanceCard({visible, refresh} : Props) {
    
    const { userAccountData } = useContext(AuthContext);

    const [ register, setRegister ] = useState<RegisterProps[]>([])

    async function loadRegisters (){
        try{
          await axios(`${baseUrl}/user/${userAccountData.id}/registers`).then(response =>{
            setRegister(response.data)
            
          })
        }catch(err){
          console.log(err);
        }
      }
    
      useEffect(() => {
        loadRegisters()
       
      },[refresh])
    

      var incomes =  register.map(register => {

            if(register.typeRegister == 'entrada'){
                var value = parseFloat(register.value);
                return value;
            }else{
                return 0
            }
            
        })      
        var expenses =  register.map(register => {

            if(register.typeRegister == 'saida'){
                var value = parseFloat(register.value);
                return value;
            }else{
                return 0
            }
            
        })

        var amontIncomes = 0;
        for(var i = 0; i < incomes.length; i++) {
            amontIncomes += incomes[i];
        }


        var amontExpenses = 0;
        for(var i = 0; i < expenses.length; i++) {
            amontExpenses += expenses[i];
        }
        
        var balanceAmount = (amontIncomes - amontExpenses)

        const values = [
            balanceAmount,
            amontIncomes,
            amontExpenses,
         ]

      const valuesFormated =  values.map(item => {
         var i = formatNumber(item, {
                separator: ',',
                prefix: 'R$ ',
                precision: 2,
                delimiter: '.',
                signPosition: 'beforePrefix',
                });
                return i;
        })


  return (
    <View style={styles.container}>
        <View style={styles.containerBalance}>

            <Text style={styles.titleValue}>
                Saldo em conta
            </Text>
            
            <Text style={styles.balanceValue}>
               {visible? valuesFormated[0] :  
               <CashHidden 
                sizeIcon={THEME.FONT_SIZE.LG}
                color={THEME.COLORS.TEXT_LIGHT}
               />} 
            </Text>

        </View>

        <View style={styles.containerMovimentations}>

            <View style={styles.contentMovimentations}>
                <ArrowUp 
                    color={THEME.COLORS.SUCCESS}
                    size={27}
               />
               <View style={{width: '70%'}}>
                <Text style={styles.titleValue}>
                    Receitas
                </Text>
                <Text style={styles.incomesValue}>
                    {visible? valuesFormated[1] : 
                    <CashHidden 
                     sizeIcon={THEME.FONT_SIZE.MD}
                     color={THEME.COLORS.SUCCESS}
                    />}
                </Text>
               </View>
            </View>

            <View style={styles.contentMovimentations}>
                <ArrowDown 
                        color={THEME.COLORS.ALERT}
                        size={27}
                />
                <View style={{width: '70%'}}>
                    <Text style={styles.titleValue}>
                        Despesas
                    </Text>
                    <Text style={styles.expenseValue}>
                        {visible? valuesFormated[2] : 
                        <CashHidden 
                         sizeIcon={THEME.FONT_SIZE.MD}
                         color={THEME.COLORS.ALERT}
                        />}
                    </Text>
                </View>
            </View>
            
        </View>
    </View>
  );
}