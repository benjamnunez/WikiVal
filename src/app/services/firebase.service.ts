import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

auth = inject(AngularFireAuth);
firestore = inject(AngularFirestore);
utilsSvc = inject(UtilsService);



//AUTENTICACION
getAuth() {
  return getAuth();
}

signIn(user: User){
  return signInWithEmailAndPassword(getAuth(), user.email, user.password)
}

signUp(user: User){
  return createUserWithEmailAndPassword(getAuth(), user.email,user.password)
}
updateUser(displayName: string){
  return updateProfile(getAuth().currentUser,{displayName})
}

signOut() {
  getAuth().signOut();
  localStorage.removeItem('user');
  this.utilsSvc.routerLink('/login');
}


//BASE DE DATOS
//setear documento
setDocument(path: string, data: any) {
  return setDoc(doc(getFirestore(), path), data);
}

//Obtener documento
async getDocument(path: string) {
  return (await getDoc(doc(getFirestore(), path))).data();
}

addDocument(path: string, data: any) {
  return addDoc(collection(getFirestore(), path), data);
}

// ALMACENAMIENTO
  async uploadImage(path: string, data_url: string){
  await uploadString(ref(getStorage(), path), data_url, 'data_url');
  return await getDownloadURL(ref(getStorage(), path));
}
}
