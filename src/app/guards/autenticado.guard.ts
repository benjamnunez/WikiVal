import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BdlocalService } from '../services/bdlocal.service';

export const autenticadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const bdlocal = inject(BdlocalService);
  const token = localStorage.getItem('authToken');

  if(token){
    return true;
  } else {
    router.navigateByUrl('/login');
    return false
  }
};
