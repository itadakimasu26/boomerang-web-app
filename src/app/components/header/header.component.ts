import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(

    public router: Router,
  ) {

  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  goToAccount(){
    this.router.navigate(['/account']);
  }



  ngOnInit() {}

}
