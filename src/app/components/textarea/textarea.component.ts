import {Component, HostBinding, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-textarea',
  template: `
<mat-form-field class="demo-full-width" [formGroup]="group">
<textarea matInput #input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType"></textarea>
<mat-hint align="end">{{input.value?.length || 0}}/10</mat-hint>
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`,
  styles: []
})
export class TextareaComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  @HostBinding('class') class ;
  constructor() {}
  ngOnInit() {
    this.class = this.field.layout;
  }
}
