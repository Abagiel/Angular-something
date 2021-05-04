import { Component, OnInit, Input } from '@angular/core';

import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.sass']
})
export class InfoBlockComponent implements OnInit {
  constructor(private service: PersonsService) { }

  get person() {
  	return this.service.currentPerson;
  }

  get gender() {
  	return this.person.gender === 'M' ? 'male' : 'female';
  }

  get status() {
    return this.person.deathYear ? 'deceased' : 'alive';
  }

  ngOnInit(): void {
  }

}
