import { NgModule } from '@angular/core';
import { MyLibraryExampleComponent } from './my-lib-example.component';
import { AclInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AclButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    MyLibraryExampleComponent,
    AclInputComponent,
    AclButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    MyLibraryExampleComponent, AclInputComponent, AclButtonComponent
  ]
})
export class MyLibraryExampleModule { }
