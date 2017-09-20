import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Equipo } from '../interfaces/equipo.interface';
import 'rxjs/Rx';
@Injectable()
export class EquiposService {

    aluURL: string = "https://heroesapp-ba9fc.firebaseio.com/Alumnos.json";
    editURL: string = "https://heroesapp-ba9fc.firebaseio.com/Alumnos/";

    constructor(private http: Http) { }

    //nuevoAlumno(alumno: Equipo) {

    //    let body = JSON.stringify(alumno);
    //    let headers = new Headers({
    //        'Content-Type': 'application/json'
    //    });
    //    return this.http.post(this.aluURL, body, { headers: headers }).map(
    //        res => {
    //            //console.log(res.json());
    //            return res.json();
    //        })
    //}
    //editarAlumno(alumno: Alumno, key$: string) {

    //    let body = JSON.stringify(alumno);
    //    let headers = new Headers({
    //        'Content-Type': 'application/json'
    //    });
    //    let url = `${this.editURL}${key$}.json`;
    //    //console.log(url);

    //    return this.http.put(url, body, { headers: headers }).map(
    //        res => {//console.log(res.json());
    //            return res.json();
    //        })
    //}
    //getAlumno(key$: string) {

    //    let url = `${this.editURL}/${key$}.json`;
    //    let headers = new Headers({
    //        'Content-Type': 'application/json'
    //    });
    //    return this.http.get(url, { headers: headers }).map(res => res.json());
    //}
    getEquipos() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.aluURL, { headers: headers }).map(res => res.json());
    }
    //deleteAlumno(key$: string) {
    //    let url = `${this.editURL}/${key$}.json`;

    //    return this.http.delete(url)
    //        .map(res => res.json());
    //}

}
