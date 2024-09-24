import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formulario: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        username:['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
        email: ['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
        contrasena2: ['', [Validators.required]]
      }, {validator: this.passwordMatchValidator });
    }
  
    ngOnInit() {
      this.enviarForm()
    }
  
    passwordMatchValidator(form: FormGroup){
      const password = form.get('contrasena')?.value;
      const confirmPassword = form.get('contrasena2')?.value;
      return password === confirmPassword ? null : {mismatch: true};
    }
  
    enviarForm(){
      if(this.formulario?.valid){
        console.log('Formulario válido', this.formulario.value);
      } else {
        console.log('Formulario no válido');
      }
    }
  }
