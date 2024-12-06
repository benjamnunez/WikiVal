import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { timeInterval } from 'rxjs';
import { lineup } from 'src/app/models/lineup.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-lineups',
  templateUrl: './lineups.page.html',
  styleUrls: ['./lineups.page.scss'],
})
export class LineupsPage implements OnInit {
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),

  })

  lineups:lineup[] = [];
  user = {} as User

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
  }

  async takeImage(){
    const dataUrl = (await this.utilsSvc.takePicture('Imagen del lineup')).dataUrl;
    this.form.controls.image.setValue(dataUrl)
  }

  async submit(){
    if (this.form.valid) {

      let path = `users/${this.user.uid}/lineups`
      const loading = await this.utilsSvc.loading();
      await loading.present();

      //subir imagen
      let dataUrl = this.form.value.image;
      let imagePath = `${this.user.uid}/${Date.now()}`;
      let imageUrl = await this.firebaseSvc.uploadImage(imagePath, dataUrl);
      this.form.controls.image.setValue(imageUrl)

      delete this.form.value.id

      this.firebaseSvc.addDocument(path, this.form.value).then( async res =>{

      }).catch(error=>{
        console.log(error);
      }).finally(() => {
        loading.dismiss();
        this.recargarPagina()
      })
    }
  }

  ionViewWillEnter(){
    this.getLineup();
  }
  userr(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }
  getLineup(){
    let path = `users/${this.userr().uid}/lineups`;
    let sub = this.firebaseSvc.getCollectionData(path).subscribe({
      next:(res : any)=>{
        console.log(res);
        this.lineups = res;
        sub.unsubscribe();
      }
    })
  }
  recargarPagina() {
    setTimeout(()=>{
      this.utilsSvc.reloadPage()
    },10000)
    
  }

}