import { Component, OnInit } from '@angular/core';
import { Mailto } from '../ngx-mailto/mailto';
import { NgxMailtoService } from '../ngx-mailto/ngx-mailto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-mailto-demo';

  receiver1 = 'anthony.na@hotmail.de';
  receiver2 = 'testa@gmail.de';


  constructor(private mailtoService: NgxMailtoService) {
  }

  ngOnInit(): void {
    const mailto: Mailto = {
      cc: [],
      subject: 'Just only a test!'
    };
    console.log(this.mailtoService.compose(mailto));
  }
}
