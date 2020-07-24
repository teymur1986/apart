import { IFlow, EFlowSupportingTypes } from '..';

const MONITORING_FLOW: IFlow = {
    'ADVANCED_SEARCH_COMPONENT': {
        name: 'Monitoring element to search for items',
        properties: {
            type: EFlowSupportingTypes.string,
            default: '',
            disabled: false,
            label: 'Searching element on Monitroing page.',
            actions: {
                onChange: 'MONITORING_UPDATE_SEARCH_INPUT',
            }
        }
    }
}
