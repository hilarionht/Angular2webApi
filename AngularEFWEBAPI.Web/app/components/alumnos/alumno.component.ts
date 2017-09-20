import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { Alumno } from '../../interfaces/alumno.interface';

import { AlumnosService } from '../../services/alumnos.service'; 

@Component({
  selector: 'app-alumno',
  templateUrl: 'app/components/alumnos/alumno.component.html',
  styles: []
})
export class AlumnoComponent implements OnInit {

  private alumno:Alumno =  {
    nombre:"",
    apellido:"",
    turno:"",
    sexo:"",
    documento:""
    
  }

  sexos = ["Hombre" , "Mujer", "No definido"]
  nuevo:boolean = false;
  id : string;
  constructor(  private _alumnoService : AlumnosService, 
                public route:Router, 
                private routeActivate:ActivatedRoute) { 
                  this.routeActivate.params.subscribe( param => {
                    //console.log(param);
                    this.id = param['id'];
                    if(this.id !== 'nuevo'){
                      this._alumnoService.getAlumno(this.id).subscribe(alumno => this.alumno = alumno)
                    }
                  })
                }

  ngOnInit() {
  }
  guardar(){
    if(this.id == 'nuevo'){
        //console.log('alumno:' , this.alumno);
        this._alumnoService.nuevoAlumno(this.alumno).subscribe(data => {
        this.route.navigate(['/alumno',data.name]);
        }, error => console.log(error));
    }else{
      this._alumnoService.editarAlumno(this.alumno,this.id).subscribe(data => {
        //console.log(data);
        //this.route.navigate(['/alumno',data.name])
        }, error => console.log(error));
    }
  }
  agregarNuevo(forma:NgForm){
  this.route.navigate(['/alumno','nuevo']);
  forma.reset({
    turno:"Mañana"
  });
  }
 
}
