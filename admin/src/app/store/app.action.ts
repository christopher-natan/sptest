import {Action} from "@ngrx/store";

export const SET_APP = '[SET APP]';
export class SetApp implements Action {
    readonly type = SET_APP;
    constructor(public action: string, public payload: any) {}
}
export type AppActions = SetApp;
