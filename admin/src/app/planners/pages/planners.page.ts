import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Planners, PlannersModel} from "../models/planners.model";
import {AppUtil} from "../../utils/app.util";
import {Table} from "primeng/table";


@Component({
    templateUrl: './planners.page.html',
    providers: [MessageService]
})
export class PlannersPage implements OnInit {
    @ViewChild('search') search!: ElementRef;
    @ViewChild('btn') btn: ElementRef;
    public planners: Planners[] = [];
    public funds: any = [];
    public sources: any = [];
    public runs: any = [];
    public reports: any = [];

    constructor(private messageService: MessageService, public plannersModel: PlannersModel, private _renderer: Renderer2) {
    }

    async ngOnInit() {
        await this.PlannersPage.setReady();
    }

    PlannersPage = {
        setReady: async () => {
            const parent = this.PlannersPage;
            await parent._setPlanners();
            await parent.onClickAddRow();
            await parent.onClickAddRowSources();
            await parent.onClickAddRowRuns();
            await parent.onClickAddRowReports();

        },
        _setPlanners: async () => {
            const onSuccess = async (response: any) => {
                const planners = response.data as Planners[];
                this.planners = planners.map((planner: Planners) => {
                    planner = this.PlannersPage._getDropdown(planner);
                    return planner;
                });
            }
            this.plannersModel.findAll(onSuccess).then(async (_: any) => {
            });
        },
        _getDropdown: (planner: Planners) => {
            const model = this.plannersModel;
            planner.plannerTypeId = this.plannersModel.findById(model.getPlannerType(), planner.plannerTypeId);
            planner.ECSId = this.plannersModel.findById(model.getESC(), planner.ECSId);
            planner.funds = this.plannersModel.findById(model.getFunds(), planner.funds);
            planner.alias = this.plannersModel.findById(model.getAlias(), planner.alias);
            planner.triggerRuns = planner.trigger.runs;
            planner.triggerSources = planner.trigger.sources;
            planner.triggerReports = planner.trigger.reports;
            return planner;
        },
        onClick: async (planner: any) => {
            const onSuccess = async (response: any) => {
                this.planners[AppUtil.findIndexById(this.planners, planner.id)] = planner;
                this.messageService.add({severity: 'info', summary: 'Success', detail: 'Planner data has been saved successfully.', life: 3000});
            }
            planner.trigger = {sources: planner.triggerSources, reports: planner.triggerReports, runs: planner.triggerRuns};
            await this.plannersModel.savePlanner(planner, onSuccess).then(async (_: any) => {
            })
        },
        onClickAddRow: async () => {
            this.funds.push({id: AppUtil.createCode(), funds: '', alias: ''});
        },
        onInputFilter(table: Table, $event: Event) {
            table.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
        },
        onClickClear: () => {
            this.search.nativeElement.value = '';
            this.search.nativeElement.dispatchEvent(new Event('input'));
        },
        onRowSelect: ($event: any) => {
            this._renderer.selectRootElement('.btn-expanded').click();
        },
        onClickAddRowRuns: async () => {
            this.runs.push({id: AppUtil.createCode()});
        },
        onClickAddRowReports: async () => {
            this.reports.push({id: AppUtil.createCode()});
        },
        onClickAddRowSources: async () => {
            this.sources.push({id: AppUtil.createCode()});
        }
    }

}
