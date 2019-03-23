import { HomeShowComponent } from './home/containers/home-show/home-show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserAddComponent } from './configuration/components/user-add/user-add.component';
import { UserPageComponent } from './configuration/containers/user-page/user-page.component';


const routes: Routes = [
  // local
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',

  },
  {
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'user-page',
    component: UserPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualisationRoutingModule { }
