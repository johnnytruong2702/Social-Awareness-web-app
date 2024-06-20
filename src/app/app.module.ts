import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [] // No bootstrap component here
})
export class AppModule { }
