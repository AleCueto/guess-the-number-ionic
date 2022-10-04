import { NgModule, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { EmphasisDirective } from './directives/emphasis.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, EmphasisDirective]
})

export class HomePageModule implements OnInit{
  
  targetNumber:number;

  constructor() 
  {
    this.targetNumber = 0;
  }
  ngOnInit(): void {

  }


}
