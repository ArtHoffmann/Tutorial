import { HomeShowComponent } from './visualisation/home/containers/home-show/home-show.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserAddComponent } from './visualisation/configuration/components/user-add/user-add.component';
import { UserPageComponent } from './visualisation/configuration/containers/user-page/user-page.component';


const routes: Routes = [
  // local
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',

  },
  {
    path: 'home',
    component: HomeShowComponent
  },
  {
    path: 'visualisation',
    // component: HomeComponent
    // loadChildren: './visualisation/visualisation.module#VisualisationModule',
    loadChildren: './visualisation/visualisation.module#VisualisationModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
