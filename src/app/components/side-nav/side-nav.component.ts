import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-nav',
  template: `
  <ion-menu side="start" type="push" menuId="menu" contentId="menu-content">
    <ion-list *ngFor="let p of pages">
        <ion-item routerLink={{p.url}} *ngIf="p?.class != 'arrow'" lines="none" [class.active-page]="selectedPath === p.url">
          <ion-icon name="{{ p.icon }}"></ion-icon>
          <ion-label class="white ion-margin" *ngIf="isExpanded == true">{{
            p.name
          }}</ion-label>
        </ion-item>
        <ion-item *ngIf="p?.class == 'arrow'" lines="none">
          <ion-icon
            (click)="isExpanded = !isExpanded"
            *ngIf="p?.class == 'arrow' && isExpanded == false"
            name="{{ p.icon }}"
          ></ion-icon>
          <ion-icon
            (click)="isExpanded = !isExpanded"
            *ngIf="isExpanded == true"
            name="{{ p?.icon2 }}"
          ></ion-icon>
        </ion-item>
    </ion-list>
  </ion-menu>
  <ion-router-outlet id="menu-content"></ion-router-outlet>
  `,
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  isExpanded = false;
  pages = [];
  selectedPath = '';

  constructor(public router: Router, public menuCtrl: MenuController) {
    this.pages = [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'grid-sharp',
        isActive: false,
      },
      {
        name: 'Orders',
        url: '/orders',
        icon: 'pricetags-sharp',
        isActive: false,
      },
      {
        name: 'Ticket',
        url: '/ticket',
        icon: 'ticket-sharp',
        isActive: false,
      },
      {
        name: 'Finance',
        url: '/finance',
        icon: 'cash-sharp',
        isActive: false,
      },
      {
        name: 'Customer List',
        url: '/customer-list',
        icon: 'list-sharp',
        isActive: false,
      },
      {
        name: 'Order Tracking',
        url: '/order-tracking',
        icon: 'analytics-sharp',
        isActive: false,
      },
      {
        name: 'Account',
        url: '/account',
        icon: 'person-sharp',
        isActive: false,
      },
      {
        icon: '',
      },
      {
        icon: 'caret-forward',
        icon2: 'caret-back',
        class: 'arrow',
      },
    ];

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });

  }

  ngOnInit() {
    this.menuCtrl.open();
  }

  ionViewDidClose() {
    this.menuCtrl.open();
  }
}
