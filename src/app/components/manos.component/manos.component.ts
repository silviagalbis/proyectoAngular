import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manos',
  templateUrl: './manos.component.html',
  styleUrls: ['./manos.component.css'],
})
export class ManosComponent implements OnInit {
  @Output() clickManoIzq = new EventEmitter();
  @Output() clickManoDch = new EventEmitter();
  @Input() manoIzq = 
  'https://prints.ultracoloringpages.com/a3e8c7385d76effc174e846da69ac3db.png';
  @Input() manoDch =
    'https://prints.ultracoloringpages.com/a3e8c7385d76effc174e846da69ac3db.png';

  constructor() {}
  ngOnInit() {}
}
