import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	contactform:FormGroup=new FormGroup({username:new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]),
  password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-zA-Z0-9]+$")])
 });


get username()
{
	return this.contactform.get('username');
}

get password()
{
  return this.contactform.get('password');
}



  ngOnInit(): void {
  }
  submitform()
  {
	  console.log(this.contactform.value);
  }
}