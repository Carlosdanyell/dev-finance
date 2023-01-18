import { View, Text } from 'react-native';
import { formatNumber } from '../../../node_modules/react-native-currency-input';
import { HeaderText } from '../HeaderText';
import { categoriesExpenses, categoriesIncomes } from '../../utils/categories';
import { styles } from './styles';
import { THEME } from '../../../theme';


export interface RegisterProps{
    id: string;
    userId: string;
    typeRegister: string;
    description: string;
    category: string;
    value: string;
    createdAt: string
  };

interface Props {
    data: RegisterProps
}

export function MoviCard({data} : Props) {
  // condicionando tipo de registro
    var entrada = true;

    if(data.typeRegister == 'saida'){
        entrada = false;
    }

  // Formatando data de criação do registro
    var extractData = data.createdAt.slice(0 , 10);

    const months = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
    ]

    function formatedDataString(str: string) {
        var day = str.slice(8, 10);
        var month = str.slice(5 , 7);
        var year = str.slice(0 ,4);

        function monthFormat(month: string) {
            let ind =  (parseFloat(month)-1);
            return months[ind];
         }

        var formatedData = `${day}/${monthFormat(month)}`;
     
        return formatedData; 
    }
 
   // Formatando valor do registro

    const formattedValue = formatNumber(parseFloat(data.value), {
    separator: ',',
    prefix: 'R$ ',
    precision: 2,
    delimiter: '.',
    signPosition: 'beforePrefix',
    });

    function renderTypeCategory (par: String){
        if(par == 'entrada'){
          return categoriesIncomes
        }else{
          return categoriesExpenses
        }
      };
    var element = renderTypeCategory(data.typeRegister).find(item => item.title == data.category);
    function hexToRgbA(hex: any){
      var c : any;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
          c = hex.substring(1).split('');
          if(c.length== 3){
              c= [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c= '0x'+c.join('');
          return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.07)';
      }
      throw new Error('Bad Hex');
  }
    var colorOpacited = hexToRgbA(element?.color);
    return (
    <View style={styles.container}>
        <View style={styles.contentDescription}>
            <View style={[styles.icon,{backgroundColor: colorOpacited}]}>
                {element?.icon(27 ,element.color)}
            </View>
            <View >
              <HeaderText
                  title={data.description}
                  subtitle={entrada ? 'Entrada' : 'Saída'}
                  margin={5}
              />
              <Text style={styles.value}>
                  {formattedValue}
              </Text>
            </View>
        </View>

        <View style={styles.contentValueDate}>
            <Text style={styles.date}>
                {formatedDataString(extractData)}
            </Text>

        </View>
    </View>
  );
}