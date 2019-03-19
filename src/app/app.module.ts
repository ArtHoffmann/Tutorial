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
import { CredentialInterceptorProvider } from './interceptors';
registerLocaleData(localeDeAt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
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
    {
      provide: LOCALE_ID, useValue: 'de-at'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
