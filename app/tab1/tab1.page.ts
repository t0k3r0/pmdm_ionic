import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso: number;
  altura: number;
  imc: number;

  constructor() { }

  onClick() {
    this.imc = this.peso * this.altura;
    console.log(this.imc);
}
}
