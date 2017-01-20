import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
data:any[];
  constructor(public navCtrl: NavController) {
    this.data = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  }

}
