import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import localeDeAt from '@angular/common/locales/de-at';
import { CredentialInterceptorProvider, ErrorInterceptor } from './interceptors';
import { DataService } from './services/data-services/data.service';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './visualisation/configuration/components/user-add/user-add.component';
import { UserPageComponent } from './visualisation/configuration/containers/user-page/user-page.component';
import { HomeShowComponent } from './visualisation/home/containers/home-show/home-show.component';
registerLocaleData(localeDeAt);

@NgModule({
  declarations: [
    AppComponent,
    HomeShowComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: null,
        deps: [HttpClient]
    }
  })
  ],
  providers: [
    CredentialInterceptorProvider,
    ErrorInterceptor,
    {
      provide: LOCALE_ID, useValue: 'de-at'
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
