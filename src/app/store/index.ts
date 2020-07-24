import { IMonitoringState, initMonitoringState } from './monitoring/types';
import { IUserState, initialUserState } from './user/types';
import { IAction, EApplicationTypes } from '../actions';

export interface IRootState {
    monitoring: IMonitoringState;
    user: IUserState;
}

export const initRootState: IRootState = {
    monitoring: initMonitoringState,
    user: initialUserState,
};

const rootReducer = (state: IRootState = initRootState, action: IAction) => {
    switch(action.type) {
        case EApplicationTypes.monitoring:
        case EApplicationTypes.user:
        default: return state;
    }
}

export default rootReducer;
