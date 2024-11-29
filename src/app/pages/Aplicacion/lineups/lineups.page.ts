import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddLineupComponent } from 'src/app/shared/components/add-lineup/add-lineup.component';

@Component({
  selector: 'app-lineups',
  templateUrl: './lineups.page.html',
  styleUrls: ['./lineups.page.scss'],
})
export class LineupsPage implements OnInit {
  firebaseSvc = inject(FirebaseService);
  utils5vc = inject(UtilsService);


  ngOnInit() {
  }
  addUpdateLineup(){
    this.utils5vc.presentModal({
      component : AddLineupComponent,
      cssClass: 'add-update-modal'
    })
  }

}
