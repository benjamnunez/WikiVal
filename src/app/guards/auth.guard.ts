import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { BdlocalService } from '../services/bdlocal.service';

export class authGuard implements CanActivate{
  constructor(
    public bdlocalservice : BdlocalService,
    public router : Router
  ){}
  
  canActivate(){
    return this.bdlocalservice.isAuthenticated();
  }
};
