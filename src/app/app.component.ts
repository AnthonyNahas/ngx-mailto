import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Mailto, NgxMailtoService } from 'ngx-mailto';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-mailto-demo';

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  receiverCtrl = new UntypedFormControl();
  ccCtrl = new UntypedFormControl();
  bccCtrl = new UntypedFormControl();
  filteredEmails: Observable<string[]>;
  emails: string[] = ['your_email@domain.de'];
  cc: string[] = [];
  bcc: string[] = [];
  subject!: string;
  body!: string;
  allEmails: string[] = ['user1@hotmail.com', 'worket2@gmail.com', 'guess@info.org'];

  receiver1 = 'anthony.na@hotmail.de';

  mailto: Mailto = {
    receiver: this.emails,
    cc: this.cc,
    bcc: this.bcc,
    subject: undefined,
    body: undefined
  };

  constructor(private mailtoService: NgxMailtoService) {
    this.filteredEmails = this.receiverCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allEmails.slice()));
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent, list: string[], fc: UntypedFormControl): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // this.emails.push(value.trim());
      list.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    fc.setValue(null);
  }

  remove(email: string, list: string[]): void {
    const index = list.indexOf(email);

    if (index >= 0) {
      list.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent, list: string[], fc: UntypedFormControl): void {
    list.push(event.option.viewValue);
    fc.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEmails.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  open(): void {
    this.mailtoService.open(this.mailto);
  }
}
