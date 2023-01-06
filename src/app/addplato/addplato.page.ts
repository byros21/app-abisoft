import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addplato',
  templateUrl: './addplato.page.html',
  styleUrls: ['./addplato.page.scss'],
})
export class AddplatoPage implements OnInit {

  @Input("plato") plato: any;
  @Input("colores") colores: any;

  color: any;

  constructor(
    private modal: ModalController
  ) { }


  ngOnInit() {

    this.colores.forEach((element: any) => {
      if (element['color_hex'] === this.plato.color)
        this.color = element;
    });

  }

  setColor(event: any) {
    this.colores.forEach((element: any) => {
      if (element['nombre'] === event.detail.value) {
        this.color = element;
        this.plato.color = this.color['color_hex'];
      }
    });
  }


  guardarCambios() {
    this.modal.dismiss({
      plato: this.plato
    });
  }

  cerrarModal() {
    this.modal.dismiss({
      role: "cancelar"
    });
  }

}
