import { Component, Input } from '@angular/core';

@Component({
  selector: 'titulo',
  template: `<h1>Juego de {{juego}}</h1>`,
  styles: [`./app.component.css`]
})
export class TituloComponent  {
  @Input() juego: string;
}
