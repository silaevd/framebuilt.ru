import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {

  @HostBinding('class.projectItem')

  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}
