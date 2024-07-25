import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PlannersPage} from "./pages/planners.page";

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PlannersPage }
	])],
	exports: [RouterModule]
})
export class PlannersRoutingModule { }
