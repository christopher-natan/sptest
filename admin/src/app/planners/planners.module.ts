import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PlannersRoutingModule} from './planners.routing.module';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from "primeng/sidebar";
import {SplitterModule} from "primeng/splitter";
import {TabViewModule} from "primeng/tabview";
import {BlockUIModule} from "primeng/blockui";
import {MenuModule} from "primeng/menu";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {PlannersPage} from "./pages/planners.page";
import {ChartModule} from "primeng/chart";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {DividerModule} from "primeng/divider";
import {CalendarModule} from "primeng/calendar";
import {AvatarModule} from "primeng/avatar";
import {AccordionModule} from "primeng/accordion";
import {TagModule} from "primeng/tag";
import {CheckboxModule} from "primeng/checkbox";
import {PlannerOwnerPipe} from "../pipes/planner.owner.pipe";

@NgModule({
    imports: [
        CommonModule,
        PlannersRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        SidebarModule,
        SplitterModule,
        TabViewModule,
        BlockUIModule,
        MenuModule,
        ProgressSpinnerModule,
        ChartModule,
        MultiSelectModule,
        SliderModule,
        DividerModule,
        CalendarModule,
        AvatarModule,
        AccordionModule,
        TagModule,
        CheckboxModule,
        PlannerOwnerPipe,
    ],
    declarations: [PlannersPage]
})
export class PlannersModule {
}
