import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BdlocalService } from '../services/bdlocal.service';

export const noAutenticadoGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const bdlocal = inject(BdlocalService);
  const auth = await bdlocal.isAuthenticated();

  if(!auth){
    return true;// se permite el acceso a la ruta
  } else {
    router.navigate(['/tabs/home']) //Redirige a la página del login si no está autenticado
    return false;
  }
};
