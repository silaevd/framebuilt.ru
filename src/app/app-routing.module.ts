import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import {ClientsPageComponent} from './pages/clients-page/clients-page.component';
import {CommentsPageComponent} from './pages/comments-page/comments-page.component';
import {ContactsPageComponent} from './pages/contacts-page/contacts-page.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';

const routes: Routes = [

    {
        path: '', component: HomePageComponent,
    },
    {
        path: 'about', component: AboutPageComponent,
    },
    {
        path: 'projects', component: ProjectsPageComponent,
    },
    {
        path: 'clients', component: ClientsPageComponent,
    },
    {
        path: 'comments', component: CommentsPageComponent,
    },
    {
        path: 'contacts', component: ContactsPageComponent,
    },
    {
        path: 'projects/:slug', component: ProjectPageComponent,
    },
    {
        path: ':slug', component: ProjectPageComponent,
    },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
