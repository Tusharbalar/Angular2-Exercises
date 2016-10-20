import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { OtherComponent }  from './other/other.component';
import { AnotherComponent }  from './other/another.component';
import { PropertyBindingComponent }  from './other/property-binding.component';
import { EventBindingComponent }  from './other/custom-eventBinding.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
