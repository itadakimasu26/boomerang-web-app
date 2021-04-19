import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//custom components
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  imports: [IonicModule,CommonModule],
  declarations: [HeaderComponent, SideNavComponent],
  exports: [HeaderComponent, SideNavComponent]
})
export class ComponentsModule{}
