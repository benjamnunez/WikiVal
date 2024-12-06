import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-account',
  templateUrl: './forgot-account.page.html',
  styleUrls: ['./forgot-account.page.scss'],
})
export class ForgotAccountPage implements OnInit {

  //modelo login que permita obtener la info. de username y password
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
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

      this.firebaseSvc.sendEmailRecovery(this.form.value.email).then(res =>{
      

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
