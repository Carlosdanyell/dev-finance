import { RegisterProps } from "../components/MoviCard";


export interface routeParams{
    state: any,
    registerSelected: RegisterProps
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            main: any;
            home: any;
            newRegister: boolean | undefined | any;
            historic: undefined;
            report: undefined;
        }
    }
}