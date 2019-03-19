import { AppComponent } from './app.component';
import { UserPageComponent } from './visualisation/container/user-page/user-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserAddComponent } from './visualisation/components/user-add/user-add.component';

const routes: Routes = [
  // local
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',

  },
  // Home
  // {
  //   path: 'home',
  //   component: UserPageComponent
  // },
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
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
