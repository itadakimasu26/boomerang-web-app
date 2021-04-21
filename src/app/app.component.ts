import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router: Router, public menuCtrl: MenuController
  ) {

  }

}

