import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'playground', component: PlaygroundComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }
  