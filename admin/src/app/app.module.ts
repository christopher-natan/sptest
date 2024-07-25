import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/layout/app.layout.module';
import {StoreModule} from "@ngrx/store";
import {AppReducer} from "./store/app.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AppLayoutModule,
        StoreModule.forRoot({
            app: AppReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
