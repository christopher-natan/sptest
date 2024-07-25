import {AppState} from "./app.state";
import * as Actions from './app.action';

export function AppReducer(state:AppState = {} as AppState, action: any) {
    switch (action.type) {
        case Actions.SET_APP:
            state = {
                ...state, app: action.payload
            };
            return state;
        default:
          return state;
    }
}
