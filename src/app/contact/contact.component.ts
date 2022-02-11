import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = this.buildForm();

   }

  ngOnInit(): void {
  }

  private buildForm() {
    return new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }
  
  newPlan(){
    console.log(this.form.value)

  }

  


}
