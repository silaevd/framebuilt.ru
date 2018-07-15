import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import {HttpClientModule} from "@angular/common/http";
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { IsActivePipe } from './pipes/is-active.pipe';
import { IsPopularPipe } from './pipes/is-popular.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutPageComponent,
        ProjectsPageComponent,
        ProjectItemComponent,
        ClientsPageComponent,
        CommentsPageComponent,
        ContactsPageComponent,
        ProjectPageComponent,
        IsActivePipe,
        IsPopularPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
