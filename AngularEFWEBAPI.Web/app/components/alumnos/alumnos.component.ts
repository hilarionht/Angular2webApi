import { Component, OnInit } from '@angular/core';

import { AlumnosService } from '../../services/alumnos.service';  

@Component({
  selector: 'app-alumnos',
  templateUrl: 'app/components/alumnos/alumnos.component.html',
  styles: []
})
export class AlumnosComponent implements OnInit {

  alumnos: any[]= [];
  loading: boolean = true;
  constructor(private _alumnoService: AlumnosService ) { 
    this._alumnoService.getAlumnos()
    .subscribe(data=> {
      
      // setTimeout(()=> {
      //   this.loading = false;
      //   this.alumnos = data;
      // },3000);
      this.alumnos = data;
      this.loading = false;
      //console.log(data);
      
      
    });
  }

  ngOnInit() {
  }
  deleteAlumno(key$:string){
    this._alumnoService.deleteAlumno(key$)
    .subscribe(respuesta=> {
      //console.log(respuesta);
      if(respuesta){
        console.log("error");
      }else{
        delete this.alumnos[key$];
      }
    })
  }

}
