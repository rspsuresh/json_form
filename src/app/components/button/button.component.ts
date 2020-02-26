import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-button',
  template: `
<div [ngClass]="'componentClass'" class="margin-top"  [formGroup]="group">
<button type="submit" mat-raised-button style="float:right" color="primary">{{field.label}}</button>
</div>
`,
  styles: []
})
export class ButtonComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  @HostBinding('class') class ;
  constructor() {}
  ngOnInit() {
    this.class = this.field.layout;
  }
}
