import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'isActive'
})
export class IsActivePipe implements PipeTransform {

    transform(projects: any, value: any): any {
        return projects.filter(project => {
            if(project.isActive == 1){
                return project;
            }
        });
    }

}
