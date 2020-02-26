import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Project Reference No.',
      inputType: 'text',
      name: 'ProjectReferenceNo',
      notes:['To show ads to people with Spanish as a language preference, select Spanish as your campaign.'],
	  //  notes:[{
    //   layout:'test',
    //   data:'test data',
    //   display:true,
    // }],
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Project Reference No'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ],
      layout: 'col-md-12 col-sm-12 col-lg-12 relative'
    },
    {
      type: 'input',
      label: 'Project Name',
      inputType: 'text',
      name: 'ProjectName',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Project Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ],
      layout: 'col-md-12 col-sm-12 col-lg-12 relative'
    },
	 {
      type: 'textarea',
      label: 'Project Description',
      inputType: 'textarea',
      name: 'Project_description',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Project Desc Required'
        }
      ],
      layout: 'col-md-12 col-sm-12 col-lg-12 relative'
    },
    {
      type: 'textarea',
      label: 'Description',
      inputType: 'text',
      name: 'Description',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Description'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ],
      layout: 'col-md-12 col-sm-12 col-lg-12 relative'
    },
    {
      type: 'input',
      label: 'Project Benefits & Features (Optional) ',
      inputType: 'text',
      name: 'ProjectBenefits',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Project Benefits & Features'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ],
      layout: 'col-md-12 col-sm-12 col-lg-12 relative'
    },
    {
      type: 'select',
      label: 'Sector',
      name: 'Sector',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US'],
      layout: 'col-md-6 col-sm-12 col-lg-6 relative'
    },
    {
      type: 'select',
      label: 'Sub-Sector',
      name: 'Sub-Sector',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US'],
      layout: 'col-md-6 col-sm-12 col-lg-6 relative'
    },
    {
      type: 'select',
      label: 'Project Type',
      name: 'ProjectType',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US'],
      layout: 'col-md-6 col-sm-12 col-lg-6 relative'
    },
    {
      type: 'select',
      label: 'Project Cost (USD) ',
      name: 'ProjectCost',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US'],
      layout: 'col-md-6 col-sm-12 col-lg-6 relative'
    },
    {
      type: 'select',
      label: 'Investment Required (USD)',
      name: 'InvestmentRequired',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US'],
      layout: 'col-md-6 col-sm-12 col-lg-6 '
    },
    {
      type: 'select',
      label: 'Project Stage',
      name: 'ProjecStage',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US'],
      layout: 'col-md-6 col-sm-12 col-lg-6'
    },    
    {
      type: 'button',
      label: 'Save & Next',
      layout: 'col-md-12 col-sm-12 col-lg-12'
    }
  ];

  submit(value: any) {
    console.table(this.form.value);
  }

}

export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  
}
