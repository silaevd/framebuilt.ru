import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../services/projects.service';
import {ContactsService} from '../../services/contacts.service';
import {ContactInterface} from '../../interfaces/contact-interface';

declare const $ :any;

@Component({
    selector: 'app-project-page',
    templateUrl: './project-page.component.html',
    styleUrls: ['./project-page.component.scss'],
    providers: [ProjectsService, ContactsService],

})

export class ProjectPageComponent implements OnInit {

    projects:any = [];
    project:any = {};
    images: any = [];
    videoLinks: any = [];
    contacts: ContactInterface;
    slug: string;

    constructor(
        private activateRoute: ActivatedRoute,
        private projectsService: ProjectsService,
        private contactsService: ContactsService
    )
    {
        this.slug = activateRoute.snapshot.params['slug'];
    }

    ngOnInit() {
        this.projectsService.getProjects().subscribe(projects => {
            for (const proj of projects) {
                if (this.slug === proj.slug) {
                    this.project = proj;
                    this.videoLinks = (proj.videoLink).split(',');
                    this.images = (proj.images).split(',');

                    if (this.project && this.videoLinks && this.images) {

                    }
                }
            }
        });

        this.contactsService.getContacts().subscribe(response => {
            this.contacts = response;
        });

        function fotorama() {
            $('.projectSlider .fotorama').fotorama({
                width: '100%',
                datawidth: '100%',
                nav: 'thumbs',
                navposition: 'bottom',
                allowfullscreen: 'true',
                transition: 'slide',
                shadows: "true",
                thumbwidth: '100'

            });

            $('.fotorama').on('fotorama:fullscreenenter fotorama:fullscreenexit', function (e, fotorama) {
                fotorama.setOptions({nav: e.type === 'fotorama:fullscreenexit' && 'thumbs'});
            });
        };

        setTimeout(fotorama, 600);

    }
}
