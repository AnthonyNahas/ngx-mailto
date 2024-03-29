<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-mailto@master/assets/angular-material-extensions-logo.svg">
</p>

# ngx-mailto - Angular library simplifying generation of mailto links with Typescript

[![npm version](https://badge.fury.io/js/ngx-mailto.svg)](https://badge.fury.io/js/ngx-mailto)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-mailto)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://anthonynahas.github.io/ngx-mailto/doc/index.html)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-mailto.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-mailto/blob/master/LICENSE)

from 

<p align="center">
  <img alt="ngx-mailto demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-mailto/HEAD/assets/ex1.png">
</p>

to -->

<p align="center">
  <img alt="ngx-mailto demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-mailto/HEAD/assets/ex2.png">
</p>


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/AnthonyNahas/ngx-mailto/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://anthonynahas.github.io/ngx-mailto)

View all the directives and components in action at [https://anthonynahas.github.io/ngx-mailto](https://anthonynahas.github.io/ngx-mailto)

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `15.x`

---

<a name="installation"/>

##  [Installation](https://anthonynahas.github.io/ngx-mailto/getting-started)

## 1. Install via *ng add*. (Recommended)


Now add the library via the `angular schematics`
```shell
ng add ngx-mailto
```

## 2. Install via *npm*. (Alternative) 

Now install `ngx-mailto` via:
```shell
npm install --save ngx-mailto
```


### Import the library

If you installed the library via angular schematics, you can skip this step


```typescript
import { NgxMailtoModule } from 'ngx-mailto'; 

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMailtoModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application like for lazy loading import ` NgxMailtoModule ` into your feature module:


<a name="api"/>

## API


```typescript
 interface Mailto {
  receiver?: string | string[];
  subject?: string;
  cc?: string | string[];
  bcc?: string | string[];
  body?: string;
}
```


<a name="usage"/>

## [Usage](https://anthonynahas.github.io/ngx-mailto)


#### via service `NgxMailtoService`


```html
<button class="try-me" mat-raised-button color="primary" (click)="open()">Try Me!</button>
```

```typescript

import { Mailto, NgxMailtoService } from 'ngx-mailto';

 emails: string[] = ['your_email@domain.de'];
  cc: string[] = [];
  bcc: string[] = [];
  subject!: string;
  body!: string;

  mailto: Mailto = {
    receiver: this.emails,
    cc: this.cc,
    bcc: this.bcc,
    subject: undefined,
    body: undefined
  };

 constructor(private mailtoService: NgxMailtoService) {
  }


open(): void {
    this.mailtoService.open(this.mailto);
  }

```


#### via pipe `mailto`

```html
<a class="try-me" mat-raised-button color="accent" [href]="this.mailto | mailto">Try me!</a>
```



<a name="run-demo-app-locally"/>

###  Run Demo App Locally

Build the library

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```



## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/select-icon](https://github.com/angular-material-extensions/select-icon)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/ngx-mailto/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

## Who is using ngx-mailto? Awesome apps?

1. [Nahaus.de](https://nahaus.de)


Are you missing your project or you app? PR me to publish it on the README

---

![jetbrains logo](https://raw.githubusercontent.com/anthonynahas/ngx-mailto/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2022 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT) <p align="center">
                                                                                                            <img alt="angular-material-extensions's logo"
                                                                                                             height="92px" width="92px" style="text-align: center;" 
                                                                                                             src="https://cdn.jsdelivr.net/gh/anthonynahas/ngx-mailto@master/assets/badge_made-in-germany.svg">
                                                                                                          </p>

