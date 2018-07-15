import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ContactInterface} from '../interfaces/contact-interface';

@Injectable()
export class ContactsService implements OnInit{

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    getContacts(): Observable<ContactInterface> {
        return this.http.get<ContactInterface>('http://api.framebuilt.ru/public/api/contacts');
    }

}
