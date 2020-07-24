
export enum EFlowSupportingTypes {
    number = 'number',
    string = 'string',
    object = 'object',
    array = 'array',
}

// TODO: The structure have to be extended and refactored.
export interface IFlow {
    [k: string]: {
        name: string;
        properties: {
            type: EFlowSupportingTypes;
            default?: string | number | Object | Array<any>;
            label?: string;
            validate?: Function;
            regex?: RegExp;
            value?:  string | number;
            disabled?: boolean;
            // have to be extended as soon as new elements added
            actions?: {
                onClick?: string;
                onChange?: string;
                onBlur?: string;
                onMouseOver?: string;
            },
            
            navigateAfter?: string;
        }
    };
}
