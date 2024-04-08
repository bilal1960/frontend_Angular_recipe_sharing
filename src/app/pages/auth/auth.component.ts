import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatRadioModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isRegister=false;

  registertionForm=new FormGroup({
    FullName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)

    ]),

  });

  loginForm=new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),

  });

  handleRegister(){
    console.log("register",this.registertionForm.value)

  }

  handleLogin(){
    console.log("login",this.loginForm.value)
  }

  togglePanel(){
    this.isRegister=!this.isRegister
  }


}
