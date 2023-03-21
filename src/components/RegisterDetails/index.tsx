import { CalendarCheck, FileText, Money, Pencil, Trash, TrendDown, TrendUp } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { formatNumber } from 'react-native-currency-input';
import { THEME } from '../../../theme';
import { categoriesIncomes, categoriesExpenses } from '../../utils/categories';
import { maskCurrency } from '../../utils/mask';
import { abbreviatedMonth } from '../../utils/months';
import { RegisterProps } from '../MoviCard'; 
import { RegisterDetailsCard } from '../RegisterDetailsCard';
import { styles } from './styles';

interface dataProps{
    data: RegisterProps,
    functionUpdate(): void,
    functionDelete(): void,
}
export function RegisterDetails({ data, functionUpdate, functionDelete } : dataProps) {

    function renderTypeCategory (par: String){
        if(par == 'entrada'){
          return categoriesIncomes
        }else{
          return categoriesExpenses
        }
      };
    var element = renderTypeCategory(data.typeRegister).find(item => item.title == data.category);

    const formattedValue = formatNumber(parseFloat(data.value), {
        separator: ',',
        prefix: 'R$ ',
        precision: 2,
        delimiter: '.',
        signPosition: 'beforePrefix',
        });

    function formatedDataString(str: string) {
        var day = str.slice(8, 10);
        var month = str.slice(5 , 7);
        var year = str.slice(0 ,4);

        function monthFormat(month: string) {
            let ind =  (parseFloat(month)-1);
            return abbreviatedMonth[ind];
            }

        var formatedData = `${day}/${monthFormat(month)}/${year}`;
        
        return formatedData; 
    }

  return (
    <View style={styles.container}>
        <RegisterDetailsCard 
         icon={ 
          data.typeRegister == 'entrada'? 
            <TrendUp 
             color={THEME.COLORS.SUCCESS}
             size={22}
            />  
           :
            <TrendDown 
             color={THEME.COLORS.ALERT}
             size={22}
            />
         }
         label={'Tipo de registro'}
         value={data.typeRegister}
        />

        <RegisterDetailsCard 
         icon={ 
            <FileText 
             color={THEME.COLORS.SHADOW_400}
             size={22}
            />
         }
         label={'Descrição'}
         value={data.description}
        />

        <RegisterDetailsCard 
         icon={ 
            element?.icon(22, element.color)
         }
         label={'Categoria'}
         value={data.category}
        />

        <RegisterDetailsCard 
         icon={ 
            <Money 
             color={THEME.COLORS.SUCCESS}
             size={22}
            />
         }
         label={'Valor'}
         value={formattedValue}
        />

        <RegisterDetailsCard 
         icon={ 
            <CalendarCheck 
             color={THEME.COLORS.SHADOW_400}
             size={22}
            />
         }
         label={'Data de criação'}
         value={formatedDataString(data.createdAt)}
        />

        <View style={styles.containerButtons}>
            <TouchableOpacity onPress={functionUpdate} style={styles.updateButton}>
                <Text style={styles.textUpdateButton}>{`Editar ${data.typeRegister == 'entrada'? 'receita' : 'despesa'}`}</Text>
                <Pencil 
                 color={THEME.COLORS.CATEGORY_YELLOW}
                 size={32}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={functionDelete} style={styles.deleteButton}>
                <Trash 
                 color={THEME.COLORS.ALERT}
                 size={32}
                />
            </TouchableOpacity>
        </View>
    </View>
  );
}