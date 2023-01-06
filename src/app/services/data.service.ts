import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverapi: string = "https://api-abisoft.vercel.app";
  //serverapi: string = "http://localhost:8081";
  pipe = new DatePipe('en-US');


  constructor(
    private http: HttpClient,
  ) { }


  changeFormat(today: string) {
    let ChangedFormat = this.pipe.transform(today, 'YYYY-MM-dd HH:mm:ss');
    //console.log(ChangedFormat);
    return ChangedFormat;
  }

  getPlatos() {
    return this.http.get(this.serverapi + "/platos/listar")
  }

  updatePlato( plato:any ) {
    console.log(plato)
    return this.http.put(this.serverapi + "/platos/editar",plato)
  }

  getColores() {
    return this.http.get(this.serverapi + "/platos/detalle/color")
  }


  deletePlato(id:number) {
    console.log(id);
    return this.http.delete(this.serverapi + "/platos/" + id);

  }


}
