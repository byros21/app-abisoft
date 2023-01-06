import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { AddplatoPage } from '../addplato/addplato.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaPlatos: any = [];
  listaColores: any = [];

  nuevoPlato= {
    nombre:"",
    precio:0.00,
    color:"#ffffff",
    fecha_inicio: new Date()
  }

  constructor(
    private dataService: DataService,
    private modalController: ModalController
  ) { }

  ngOnInit() {

    //this.setInitData();

  }

  ionViewWillEnter() {
    this.dataService.getColores().subscribe((res: any) => {
      this.listaColores = res['colores'];
    });

    this.dataService.getPlatos().subscribe((res: any) => {
      this.listaPlatos = res['platos'];
    })
  }

  cambiarFecha(today: string) {
    return this.dataService.changeFormat(today)
  }

  async editarPlato(plato:any,index:number){

    const objPlato = JSON.parse(JSON.stringify(plato))
    //console.log(aspirante, objAspirante)
    const modal = await this.modalController.create({
      component: AddplatoPage,
      cssClass: 'my-modal-class',
      componentProps: {
        plato: objPlato,
        colores: this.listaColores
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (!data || data == undefined || data.role == "cancelar") {
      //objAspirante = ''
      modal.dismiss()
      return;
    }

    //console.log(data);

    this.dataService.updatePlato(data.plato).subscribe((res:any) => {
      if(res['success']==true){
        if(index>=0){
          this.listaPlatos[index] = data.plato;
        }else{
          this.listaPlatos.push(data.plato)
        }
      }
    })

  }

  eliminarPlato(id:number, index:number){
    //console.log(id, index);
    return this.dataService.deletePlato(id).subscribe( (res:any) => {
      if(res['success']==true){
        this.listaPlatos.splice(index, 1);
      }
    })
  }

}
