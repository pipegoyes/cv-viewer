import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechsComponent } from './techs/techs.component';
import { JobMatcherComponent } from './job-matcher/job-matcher.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'techs', component: TechsComponent }
];
