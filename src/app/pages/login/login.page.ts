import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //modelo login que permita obtener la info. de username y password
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  
  constructor(
    public router: Router,
    public toastController:ToastController,
    
  ) { }
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  async submit(){
    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res =>{
        
        this.getUserInfo(res.user.uid);

      }).catch(error=>{
        console.log(error);
      }).finally(() => {
        loading.dismiss();
      })
    }
  }

  async getUserInfo(uid: string){
    if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseSvc.getDocument(path).then((user: User) =>{

        this.utilsSvc.saveInLocalStorage('user', user);
        this.utilsSvc.routerLink('/tabs/armas');
        this.form.reset();
      }).catch(error=>{
        console.log(error);
      }).finally(() => {
        loading.dismiss();
      })
    }
  }

  recoveryAcc(){
    this.router.navigate(['forgot-account'])
  }




}