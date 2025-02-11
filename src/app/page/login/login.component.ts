import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  loginForm = this.fb.group({
    email: ["", [Validators. required, Validators.email]],
    password: ["", Validators.required] 
})

  _onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value),
      this.router.navigate(["home"])
    }else{
      alert("Usuario Inválido")
    }
  }

}
