import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  moles_Cr2O3:number=parseInt(prompt("Introduce el numero de moles de Cr2O3?"));

  moles_si:number=3;

  cromo_metalico:number=4;
}
