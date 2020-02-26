import {Component, HostBinding, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-input',
  template: `
<mat-form-field class="demo-full-width" [formGroup]="group">
<input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field><div class="note" *ngIf="field.notes">{{field.notes[0]}}</div>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  @HostBinding('class') class ;
  constructor() {}
  ngOnInit() {
    this.class = this.field.layout;
  }
}
