import {Component, OnInit} from '@angular/core';
import {ContactsService} from './services/contacts.service';
import {ContactInterface} from './interfaces/contact-interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ContactsService],
})
export class AppComponent implements OnInit {

    contacts: ContactInterface;
    tel = '';

    constructor(private contactsService: ContactsService) { }

    ngOnInit() {

        this.contactsService.getContacts().subscribe(contacts => {
            this.contacts = contacts;
            this.tel = (contacts.data.phone).replace( /\(|\)|\-|\s/g, '');
        });


    }
}
