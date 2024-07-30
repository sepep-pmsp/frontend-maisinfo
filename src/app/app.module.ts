import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HomeComponent,
    AppComponent,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
})
export class AppModule { }
