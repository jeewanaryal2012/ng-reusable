import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JaTypeaheadComponent } from './ja-typeahead.component';



@NgModule({
  declarations: [JaTypeaheadComponent],
  imports: [
    BrowserModule
  ],
  exports: [JaTypeaheadComponent]
})
export class JaTypeaheadModule { }
