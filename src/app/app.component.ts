import { Component, OnInit } from '@angular/core';
import { ManosComponent } from './components/manos.component/manos.component';
import { MarcadorComponent } from './components/marcador.component/marcador.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  juego = 'encontrar la llave';

  private manoCerrada: string =
    'https://prints.ultracoloringpages.com/a3e8c7385d76effc174e846da69ac3db.png';
  private manoVacia: string =
    'https://prints.ultracoloringpages.com/7d8e4cea7b9f7b26e7bc76e1d4b2c1c9.png';
  private manoLlave: string =
    'https://thumbs.dreamstime.com/b/mano-con-llave-silueta-negra-brazo-abierto-y-llaves-vector-aislado-sobre-blanco-213968445.jpg';

  manoIzq: string = this.manoCerrada;
  manoDch: string = this.manoCerrada;
  ptojugador: number = 0;
  ptomaquina: number = 0;
  textpista: string;
  random: number = 0;

  ngOnInit() {
    this.crearNumRandom();
  }

  showPista() {
    if (this.random == 1) {
      this.textpista = 'Esta en la mano izquierda';
    } else {
      this.textpista = 'Esta en la mano derecha';
    }
  }

  reiniciar() {
    this.ptojugador = 0;
    this.ptomaquina = 0;
  }

  crearNumRandom() {
    this.random = Math.floor(Math.random() * 2) + 1;
  }

  clickManoIzq() {
    //He acertado al pulsar
    if (this.random == 1) {
      this.manoIzq = this.manoLlave;
      this.ptojugador++;
      //He fallado al pulsar
    } else {
      this.manoIzq = this.manoVacia;
      this.ptomaquina++;
      this.manoDch = this.manoLlave;
    }
    this.cerrarManos();
  }

  clickManoDch() {
    //He acertado al pulsar
    if (this.random == 2) {
      this.manoDch = this.manoLlave;
      this.ptojugador++;
      //He fallado al pulsar
    } else {
      this.manoDch = this.manoVacia;
      this.ptomaquina++;
      this.manoIzq = this.manoLlave;
    }
    this.cerrarManos();
  }
  cerrarManos() {
    this.random = Math.floor(Math.random() * 2) + 1;
    setTimeout(() => {
      this.manoIzq = this.manoCerrada;
      this.manoDch = this.manoCerrada;
      this.textpista = '';
    }, 500);
  }
}
