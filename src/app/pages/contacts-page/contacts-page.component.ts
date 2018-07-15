import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {ContactInterface} from '../../interfaces/contact-interface';

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss'],
    providers: [ContactsService]
})
export class ContactsPageComponent implements OnInit {

    contacts: ContactInterface;
    tel = '';

    constructor(private contactsService: ContactsService) {
    }

    ngOnInit() {
        this.contactsService.getContacts().subscribe(response => {
            this.contacts = response;
            this.tel = (response.data.phone).replace( /\(|\)|\-|\s/g, '');
        });
    }

}
