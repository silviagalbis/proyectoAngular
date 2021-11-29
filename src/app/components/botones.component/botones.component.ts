import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent implements OnInit {
  @Input() textpista: string;
  @Output() reiniciar = new EventEmitter();
  @Output() pista = new EventEmitter();

  constructor() {}
  ngOnInit() {}
}
