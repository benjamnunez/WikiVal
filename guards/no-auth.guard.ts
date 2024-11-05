import { inject } from '@angular/core';
import { CanActivateFn, ResolveEnd } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const firebaseSvc = inject(FirebaseService);
  const utilSvc = inject(UtilsService);

  
  return new Promise((resolve) => {
    
    firebaseSvc.getAuth().onAuthStateChanged((auth) => {

      if(!auth) {
        resolve(true);
      } else {
        utilSvc.routerLink('/tabs/armas');
        resolve(false);
      }
    })

  })
};
