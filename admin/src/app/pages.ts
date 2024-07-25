import {Store} from "@ngrx/store";
import {AppState} from "./store/app.state";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class Pages {
    constructor(public store: Store<AppState>) {

    }

}
