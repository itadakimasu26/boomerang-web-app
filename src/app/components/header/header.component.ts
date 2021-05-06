import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <ion-header class="back-color">
      <ion-toolbar class="back-color ">
        <ion-item lines="none" class="back-color" slot="start">
          <ion-buttons class="header-icons">
            <ion-menu-button content-id="menu-content" menu="menu">
            </ion-menu-button>
          </ion-buttons>
          <img
            style="max-height: 10vh;"
            (click)="goToDashboard()"
            class="logo"
            src="../../../assets/boomerang-logo.png"
          />
        </ion-item>
        <ion-item lines="none" slot="end" class="back-color">
          <ion-chip class="back-color details">
            <ion-avatar>
              <img src="../../../assets/avatar.png" />
            </ion-avatar>
            <p (click)="goToAccount()" class="name">Michael John Ojoys</p>
          </ion-chip>
          <ion-icon class="header-icons" name="notifications-sharp"></ion-icon>
        </ion-item>
      </ion-toolbar>
    </ion-header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pages = [];
  constructor(public router: Router) {
    this.pages = [
      {
        name: '',
        url: '/dashboard',
        icon: 'grid-sharp',
        isActive: false,
      },
      {
        name: '',
        url: '/orders  ',
        icon: 'pricetags-sharp',
        isActive: false,
      },
      {
        name: '',
        url: '/ticket',
        icon: 'ticket-sharp',
        isActive: false,
      },
      {
        name: '',
        url: '/finance',
        icon: 'cash-sharp',
        isActive: false,
      },
      {
        name: '',
        url: '/customer-list',
        icon: 'list-sharp',
        isActive: false,
      },
      {
        name: '',
        url: '/order-tracking',
        icon: 'analytics-sharp',
        isActive: false,
      },
      {
        name: '',
        url: '/account',
        icon: 'person-sharp',
        isActive: false,
      },
      {
        icon: '',
      },
      {
        icon: 'caret-forward',
        class: 'arrow',
      },
    ];
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToAccount() {
    this.router.navigate(['/account']);
  }

  ngOnInit() {}
}
