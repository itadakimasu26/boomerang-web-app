import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  pages = [];
  constructor(
    public router: Router,
  ) {
    this.pages = [
      {
        name: '',
        url: '/dashboard',
        icon: 'grid-sharp',
        isActive: false
      },{
        name: '',
        url: '/orders  ',
        icon: 'pricetags-sharp',
        isActive: false
      },{
        name: '',
        url: '/ticket',
        icon: 'ticket-sharp',
        isActive: false
      },{
        name: '',
        url: '/finance',
        icon: 'cash-sharp',
        isActive: false
      },{
        name: '',
        url: '/customer-list',
        icon: 'list-sharp',
        isActive: false
      },{
        name: '',
        url: '/order-tracking',
        icon: 'analytics-sharp',
        isActive: false
      },{
        name: '',
        url: '/account',
        icon: 'person-sharp',
        isActive: false
      },{
        icon: '',
      },{
        icon: 'caret-forward',
        class: 'arrow'
      }
    ];
  }

  ngOnInit() {
    console.log(this.pages);
  }
}
