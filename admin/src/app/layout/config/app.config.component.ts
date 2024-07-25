import {Component, Input} from '@angular/core';
import {LayoutService} from '../service/app.layout.service';


@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html',
})
export class AppConfigComponent {
    @Input() minimal: boolean = false;


    constructor(
        public layoutService: LayoutService,
    ) {
    }

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }


}
