import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FormTextComponent } from './Components/input';
import { CoordinatesFormComponent } from './Components/coordinates-form';

@NgModule({
  declarations: [
    AppComponent,
    FormTextComponent,
    CoordinatesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
