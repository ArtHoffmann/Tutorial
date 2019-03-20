import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserAddComponent } from './visualisation/configuration/components/user-add/user-add.component';
import { UserPageComponent } from './visualisation/configuration/containers/user-page/user-page.component';
import { HomeShowComponent } from './visualisation/home/containers/home-show/home-show.component';

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
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'user-page',
    component: UserPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
