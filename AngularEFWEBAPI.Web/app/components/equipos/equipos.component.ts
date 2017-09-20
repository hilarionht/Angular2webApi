import { Component, OnInit } from '@angular/core';

import { EquiposService } from '../../services/equipos.service';

@Component({
    selector: 'app-equipos',
    templateUrl: 'app/components/equipos/equipos.component.html',
    styles: []
})
export class EquiposComponent implements OnInit {

    equipos: any[] = [];
    loading: boolean = true;
    constructor(private _equipoService: EquiposService) {
        this._equipoService.getEquipos()
            .subscribe(data => {

                // setTimeout(()=> {
                //   this.loading = false;
                //   this.alumnos = data;
                // },3000);
                this.equipos = data;
                this.loading = false;
                //console.log(data);


            });
    }

    ngOnInit() {
    }
    //deleteAlumno(key$: string) {
    //    this._alumnoService.deleteAlumno(key$)
    //        .subscribe(respuesta => {
    //            //console.log(respuesta);
    //            if (respuesta) {
    //                console.log("error");
    //            } else {
    //                delete this.alumnos[key$];
    //            }
    //        })
    //}

}
