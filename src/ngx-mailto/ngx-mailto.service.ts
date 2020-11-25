import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Mailto } from './mailto';

@Injectable({
  providedIn: 'root'
})
export class NgxMailtoService {

  // tslint:disable-next-line:ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  isClientSide(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  compose(value: Mailto): string | void {
    let link = 'mailto:';
    let properties = [];
    if (this.isClientSide()) {
      if (value.receiver) {
        if (typeof value.receiver === 'string') {
          link += value.receiver;
        } else {
          link += value.receiver.join();
        }
      }
      if (value.cc) {
        if (typeof value.cc === 'string') {
          // link += `?cc=${value.cc}`;
          properties.push(`cc=${value.cc}`);
        } else {
          // link += `?cc=${value.cc.join()}`;
          properties.push(`cc=${value.cc.join()}`);
        }
      }
      if (value.bcc) {
        if (typeof value.bcc === 'string') {
          // link += `?bcc=${value.bcc}`;
          properties.push(`bcc=${value.bcc}`);
        } else {
          // link += `?bcc=${value.bcc.join()}`;
          properties.push(`bcc=${value.bcc.join()}`);
        }
      }
      if (value.subject) {
        // link += `?subject=${value.subject}`;
        properties.push(`subject=${value.subject}`);
      }
      if (value.body) {
        // link += `?body=${value.body}`;
        properties.push(`body=${value.body}`);
      }
      if (properties.length > 0) {
        link += `?${properties.join('&')}`;
      }
      return link;
    }
  }
}
