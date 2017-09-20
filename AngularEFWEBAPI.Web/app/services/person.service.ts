import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Person } from '../interfaces/person.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class PersonService {
    persUrl: string = "http://localhost:12667/api/Person";
    constructor(private http: Http) { }

    getPersons(): Observable<Person[]> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get(this.persUrl).map(res => <Person[]>res.json());
    }
}