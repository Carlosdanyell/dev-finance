import { THEME } from "../../theme";
import { 
    TrendUp,
    Gift,
    ShieldStar,
    Money,
    DotsThree,
    HouseLine,
    BookOpen,
    Desktop,
    Umbrella,
    Hamburger,
    FirstAidKit,
    ClipboardText,
    ShoppingCart,
    TShirt,
    Car,
 } from "phosphor-react-native";


export const categoriesIncomes = [
    {
        id: "1",
        title: "Investimentos",
        color: THEME.COLORS.CATEGORY_GREEN,
        icon: (sizeProp: any, colorProp: any) => <TrendUp  size={sizeProp} color={colorProp}/>
    },
    {
        id: "2",
        title: "Presente",
        color: THEME.COLORS.CATEGORY_PURPLE_900,
        icon: (sizeProp: any, colorProp: any) => <Gift size={sizeProp} color={colorProp}/>
    },
    {
        id: "3",
        title: "Prêmios",
        color: THEME.COLORS.CATEGORY_RED,
        icon: (sizeProp: any, colorProp: any) => <ShieldStar size={sizeProp} color={colorProp}/>
    },
    {
        id: "4",
        title: "Salário",
        color: THEME.COLORS.CATEGORY_GREEN_900,
        icon: (sizeProp: any, colorProp: any) => <Money size={sizeProp} color={colorProp}/>
    },
    {
        id: "5",
        title: "Outros",
        color: THEME.COLORS.CATEGORY_GRAY,
        icon: (sizeProp: any, colorProp: any) => <DotsThree size={sizeProp} color={colorProp}/>
    }
]
export const categoriesExpenses = [
    {
        id: "1",
        title: "Casa",
        color: THEME.COLORS.CATEGORY_BLUE_900,
        icon: (sizeProp: any, colorProp: any) => <HouseLine size={sizeProp} color={colorProp}/>
    },
    {
        id: "2",
        title: "Educação",
        color: THEME.COLORS.CATEGORY_PURPLE_900,
        icon: (sizeProp: any, colorProp: any) => <BookOpen size={sizeProp} color={colorProp}/>
    },
    {
        id: "3",
        title: "Eletrônicos",
        color: THEME.COLORS.CATEGORY_ORANGE,
        icon: (sizeProp: any, colorProp: any) => <Desktop size={sizeProp} color={colorProp}/>
    },
    {
        id: "4",
        title: "Lazer",
        color: THEME.COLORS.CATEGORY_YELLOW,
        icon: (sizeProp: any, colorProp: any) => <Umbrella size={sizeProp} color={colorProp}/>
    },
    {
        id: "5",
        title: "Comida",
        color: THEME.COLORS.CATEGORY_RED,
        icon: (sizeProp: any, colorProp: any) => <Hamburger size={sizeProp} color={colorProp}/>
    },
    {
        id: "6",
        title: "Saúde",
        color: THEME.COLORS.CATEGORY_GREEN_900,
        icon: (sizeProp: any, colorProp: any) => <FirstAidKit size={sizeProp} color={colorProp}/>
    },
    {
        id: "7",
        title: "Serviços",
        color: THEME.COLORS.CATEGORY_BEGE,
        icon: (sizeProp: any, colorProp: any) => <ClipboardText size={sizeProp} color={colorProp}/>
    },
    {
        id: "8",
        title: "Supermercado",
        color: THEME.COLORS.CATEGORY_PINK,
        icon: (sizeProp: any, colorProp: any) => <ShoppingCart size={sizeProp} color={colorProp}/>
    },
    {
        id: "9",
        title: "Vestuário",
        color: THEME.COLORS.CATEGORY_BLUE,
        icon: (sizeProp: any, colorProp: any) => <TShirt size={sizeProp} color={colorProp}/>
    },
    {
        id: "10",
        title: "Transporte",
        color: THEME.COLORS.CATEGORY_CIANO,
        icon: (sizeProp: any, colorProp: any) => <Car size={sizeProp} color={colorProp}/>
    },
    {
        id: "11",
        title: "Outros",
        color: THEME.COLORS.CATEGORY_GRAY,
        icon: (sizeProp: any, colorProp: any) => <DotsThree size={sizeProp} color={colorProp}/>
    }
]