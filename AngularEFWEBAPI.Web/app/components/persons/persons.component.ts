import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { PersonService } from '../../services/person.service';  

@Component({
  selector: 'app-persons',
  templateUrl: 'app/components/persons/persons.component.html',
  styles: []
})
export class PersonComponent implements OnInit {

  persons: Person[];
  loading: boolean = true;
  constructor(private _personService: PersonService) {
      this._personService.getPersons()
          .subscribe((data) => { this.persons = data, this.loading = false; });
  }
  deleteAlumno(a: string) {

  }
  ngOnInit() {
  }
  

}
