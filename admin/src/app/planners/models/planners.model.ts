import {Injectable} from "@angular/core";
import {Models} from "../../models/models";

export interface Planners {
    id?: string;
    name?: string;
    description?: string;
    plannerTypeId?: any;
    ECSId?: any;
    funds: any;
    alias: any;
    triggerSources: boolean;
    triggerRuns: boolean;
    triggerReports: boolean;
    sources: number;
    runsId: number;
    reportsId: number;
    trigger: any;
    createAt: Date;
    updatedAt: Date;
}

type Callback = (request: any) => void;

@Injectable({providedIn: "root"})
export class PlannersModel extends Models {
    public findAll = async (onSuccess: Callback, onError?: Callback) => {
        const params = {path: 'planners', onError: onError, onSuccess: onSuccess}
        return await this.Request.get(params);
    }

    public savePlanner = async (planner: Planners, onSuccess: Callback, onError?: Callback) => {
        const params = {path: 'planners', onError: onError, onSuccess: onSuccess, data: planner, headers: {'Planner-Id': planner.id}};
        return await this.Request.post(params);
    }

    public getPlannerType() {
        return [
            {id: 1, name: 'Planner One'},
            {id: 2, name: 'Planner Two'}];

    }

    public findById(jsonArray: any, id: any) {
        return jsonArray.find((jsonArray: { id: number; }) => jsonArray.id === id);
    }

    public getESC() {
        return [{
            "id": 1,
            "name": "Schowalter LLC"
        }, {
            "id": 2,
            "name": "Jakubowski, Carter and Zboncak"
        }, {
            "id": 3,
            "name": "Larson Group"
        }, {
            "id": 4,
            "name": "Collier, DuBuque and Vandervort"
        }, {
            "id": 5,
            "name": "Dare Group"
        }, {
            "id": 6,
            "name": "Konopelski-Kirlin"
        }, {
            "id": 7,
            "name": "Kunde Inc"
        }, {
            "id": 8,
            "name": "Hirthe Inc"
        }, {
            "id": 9,
            "name": "Hills, Medhurst and Kohler"
        }, {
            "id": 10,
            "name": "Schultz and Sons"
        }]

    }

    public getFunds() {
        return [{
            "id": 1,
            "name": "Collier-Heller"
        }, {
            "id": 2,
            "name": "Ullrich and Sons"
        }, {
            "id": 3,
            "name": "Fay Group"
        }, {
            "id": 4,
            "name": "Emard-Kiehn"
        }, {
            "id": 5,
            "name": "Swaniawski and Sons"
        }, {
            "id": 6,
            "name": "Denesik, Lehner and Price"
        }, {
            "id": 7,
            "name": "Schroeder, Macejkovic and Schroeder"
        }, {
            "id": 8,
            "name": "Wunsch and Sons"
        }, {
            "id": 9,
            "name": "Hahn Group"
        }, {
            "id": 10,
            "name": "Zulauf-Bednar"
        }]

    }

    public getAlias() {
        return [{
            "id": 1,
            "name": "Larkin-Stracke"
        }, {
            "id": 2,
            "name": "Lowe, Ondricka and Carroll"
        }, {
            "id": 3,
            "name": "Ward-McCullough"
        }, {
            "id": 4,
            "name": "Langworth Inc"
        }, {
            "id": 5,
            "name": "Leuschke, Mraz and Dicki"
        }, {
            "id": 6,
            "name": "Farrell, Crona and Ritchie"
        }, {
            "id": 7,
            "name": "Strosin and Sons"
        }, {
            "id": 8,
            "name": "Morar, Zboncak and Lockman"
        }, {
            "id": 9,
            "name": "O'Kon, Orn and Wolf"
        }, {
            "id": 10,
            "name": "Kautzer, Cummerata and Stamm"
        }]

    }

    public getSources() {
        return [{
            "id": 1,
            "name": "Ferry Inc"
        }, {
            "id": 2,
            "name": "Cormier Group"
        }, {
            "id": 3,
            "name": "Roob and Sons"
        }, {
            "id": 4,
            "name": "Gulgowski-Sauer"
        }, {
            "id": 5,
            "name": "Dooley Group"
        }, {
            "id": 6,
            "name": "Doyle Group"
        }, {
            "id": 7,
            "name": "Donnelly, Turcotte and Schumm"
        }, {
            "id": 8,
            "name": "Trantow LLC"
        }, {
            "id": 9,
            "name": "Connelly, Price and Wisoky"
        }, {
            "id": 10,
            "name": "Kessler LLC"
        }]

    }

    public getRuns() {
        return [{
            "id": 1,
            "name": "Gibson and Sons"
        }, {
            "id": 2,
            "name": "Zboncak and Sons"
        }, {
            "id": 3,
            "name": "VonRueden, Kub and Schoen"
        }, {
            "id": 4,
            "name": "Hermiston-Wiza"
        }, {
            "id": 5,
            "name": "Kub-Rohan"
        }, {
            "id": 6,
            "name": "Hettinger and Sons"
        }, {
            "id": 7,
            "name": "Corwin-Koss"
        }, {
            "id": 8,
            "name": "Jast, Gutkowski and Bechtelar"
        }, {
            "id": 9,
            "name": "Brakus-Purdy"
        }, {
            "id": 10,
            "name": "McLaughlin LLC"
        }]

    }

    public getReports() {
        return [{
            "id": 1,
            "name": "Watsica Inc"
        }, {
            "id": 2,
            "name": "Stamm LLC"
        }, {
            "id": 3,
            "name": "Fahey and Sons"
        }, {
            "id": 4,
            "name": "Wuckert, Legros and Weimann"
        }, {
            "id": 5,
            "name": "Koch-Dickinson"
        }, {
            "id": 6,
            "name": "Greenfelder and Sons"
        }, {
            "id": 7,
            "name": "Jacobs, Nitzsche and Wuckert"
        }, {
            "id": 8,
            "name": "Collins, Schulist and Wunsch"
        }, {
            "id": 9,
            "name": "Jenkins-Bayer"
        }, {
            "id": 10,
            "name": "Howell-Beatty"
        }]

    }

}
