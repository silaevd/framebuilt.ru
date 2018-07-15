import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPopular'
})
export class IsPopularPipe implements PipeTransform {

  transform(projects: any, value: any): any {
      return projects.filter(project => {
          if(project.isPopular == 1) {
              return project;
          }
      });
  }

}
