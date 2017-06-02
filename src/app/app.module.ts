import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FormTextComponent } from './Components/input';
import { FormSelectComponent } from './Components/select';
import { FormComplexComponent } from './Components/complex-form';
import { ValidationComponent } from './Components/validation';
import { CoordinatesFormComponent } from './Components/coordinates-form';
import { HexadecimalValueValidator } from './Validators/hexadecimal-validator';

@NgModule({
  declarations: [
    AppComponent,
    FormTextComponent,
    FormSelectComponent,
    FormComplexComponent,
    CoordinatesFormComponent,
    HexadecimalValueValidator,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
