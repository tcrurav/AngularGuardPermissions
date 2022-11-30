import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxPermissionsModule } from 'ngx-permissions';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    // NgxPermissionsModule
  ]
})
export class SharedModule { }
