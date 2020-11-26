import { Pipe, PipeTransform } from '@angular/core';
import { Mailto } from './mailto';
import { NgxMailtoService } from './ngx-mailto.service';

@Pipe({
  name: 'mailto'
})
export class NgxMailtoPipe implements PipeTransform {

  constructor(private ngxMailtoService: NgxMailtoService) {
  }

  transform(value: Mailto): string | void {
    console.log('transform', value);
    return this.ngxMailtoService.compose(value);
  }

}
