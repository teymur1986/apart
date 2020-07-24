
export interface IAction {
    type: string;
    subtype: string;
    payload?: {
        [k: string]: any;
    }
}

export enum EApplicationTypes {
    monitoring = 'MONITORING',
    user = 'USER',
};
