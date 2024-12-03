import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  utilsvc = inject(UtilsService);

  @Input() title!: string;
  @Input() backButton!: string;
  @Input() username!: string;

  user = {} as User;

  ngOnInit() {
    this.user = this.utilsvc.getFromLocalStorage('user');
  }
  ionViewDidEnter() {
    this.utilsvc.loading;
  }

}
