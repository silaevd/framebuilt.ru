import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SliderService {

    constructor(private http: HttpClient) { }

    getSliders(): any {
        return this.http.get('http://api.framebuilt.ru/public/api/sliders').map(response => response['data']);
    }

}
