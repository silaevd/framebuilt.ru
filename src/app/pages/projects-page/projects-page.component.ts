import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {ContactsService} from '../../services/contacts.service';
import {ContactInterface} from '../../interfaces/contact-interface';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss'],
    providers: [ProjectsService],
})

export class ProjectsPageComponent implements OnInit {

    projects = [];
    contacts: ContactInterface;


    constructor(
        private projectsService: ProjectsService,
        private contactsService: ContactsService
    ) { }

    ngOnInit() {
        this.projectsService.getProjects().subscribe(projects => {
            this.projects = projects;
        });

        this.contactsService.getContacts().subscribe(response => {
            this.contacts = response;
        });
    }

}
