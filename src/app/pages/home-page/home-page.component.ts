import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {SliderService} from '../../services/slider.service';
declare const $ :any;

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    providers: [ProjectsService, SliderService],
})
export class HomePageComponent implements OnInit {

    projects  = [];
    sliderImages:any = [];

      constructor(
          private projectsService: ProjectsService,
          private sliderService: SliderService,

      )
      { }

      ngOnInit() {

          this.projectsService.getProjects().subscribe(projects => {
              this.projects = projects;
          });

          this.sliderService.getSliders().subscribe(sliders => {
              for (const slider of sliders ) {
                  this.sliderImages.push(slider.file_name);
              }
          });

          function fotorama() {
              $('.mainSlider .fotorama').fotorama({
                  width: '100%',
                  datawidth: '100%',
                  nav: false
              });


          }
          setTimeout(fotorama, 600);
  }

}
