import {Component, HostBinding, OnInit} from '@angular/core';
declare const $: any;

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss'],
})

export class AboutPageComponent implements OnInit {

    constructor() {}

    ngOnInit() {

        $('.imgPopup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
        });

    }

}
