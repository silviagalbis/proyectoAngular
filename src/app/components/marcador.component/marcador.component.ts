import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css'],
})
export class MarcadorComponent implements OnInit {
  @Input() ptojugador: number = 0;
  @Input() ptomaquina: number = 0;

  constructor() {}
  ngOnInit() {}
}
