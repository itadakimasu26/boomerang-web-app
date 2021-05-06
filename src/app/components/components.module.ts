import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//custom components
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule,CommonModule,RouterModule],
  declarations: [HeaderComponent, SideNavComponent],
  exports: [HeaderComponent, SideNavComponent,]
})
export class ComponentsModule{}
