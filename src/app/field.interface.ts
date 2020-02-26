export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  notes?:string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  layout?:any;
}
