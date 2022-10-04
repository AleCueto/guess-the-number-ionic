import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  targetNumber: number;
  publicTargetNumber: number;
  numberChosen: number;
  message: string;

  constructor() {
    this.targetNumber = Math.round(Math.random() * (9999 - 0 + 1) + 0); //Set random number between 9999 and 0
    this.message = "";
  }
  
  compareNumbers(numberChosen){
    if(numberChosen > this.targetNumber)
    {
      this.message = "El número objetivo es menor"
    } else if (numberChosen < this.targetNumber)
    {
      this.message = "El número objetivo es mayor"
    } else if (numberChosen == this.targetNumber)
    {
      this.message = "!HAS ADIVINADO EL NÚMERO!"
    }
  }

  surrender()
  {
    this.message = "El número que debías adivinar era el: " + this.targetNumber; 
  }

  

}
