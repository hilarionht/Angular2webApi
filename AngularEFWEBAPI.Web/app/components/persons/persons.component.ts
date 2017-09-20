import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';  

@Component({
  selector: 'app-persons',
  templateUrl: 'app/components/persons/persons.component.html',
  styles: []
})
export class PersonComponent implements OnInit {

  persons: any[]= [];
  loading: boolean = true;
  constructor(private _personService: PersonService) {
      this._personService.getPersons()
    .subscribe(data=> {
      
      // setTimeout(()=> {
      //   this.loading = false;
      //   this.alumnos = data;
        // },3000);
        this.persons = data;
        this.loading = false;
      //console.log(data);
      
      
    });
  }
  deleteAlumno(a: string) {

  }
  ngOnInit() {
  }
  

}
