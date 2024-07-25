import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'plannerOwner'
})
export class PlannerOwnerPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return 'Owner: None';
        return value;
    }
}
