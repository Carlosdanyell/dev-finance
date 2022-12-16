export interface routeParams{
    state: boolean;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: any;
            register: boolean;
            historic: undefined;
        }
    }
}