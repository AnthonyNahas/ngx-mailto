import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMailtoPipe } from './ngx-mailto.pipe';


@NgModule({
  declarations: [NgxMailtoPipe],
  exports: [
    NgxMailtoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class NgxMailtoModule {
}
