import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): any {
      return this.http.get('http://api.framebuilt.ru/public/api/projects').map(response => response['data']);
  }

}
