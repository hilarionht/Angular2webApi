import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Person } from '../interfaces/person.interface';
import 'rxjs/Rx';
@Injectable()
export class PersonService {
    persUrl: string = "http://localhost:12667/api/Person";
    constructor(private http: Http) { }
    getPersons() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.persUrl).map(res => res.json());
    }
}