import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { OtherComponent }  from './other/other.component';
import { AnotherComponent }  from './other/another.component';
import { PropertyBindingComponent }  from './other/property-binding.component';
import { EventBindingComponent }  from './other/custom-eventBinding.component';
import { TwoWayBindingComponent }  from './other/two-way-binding.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
