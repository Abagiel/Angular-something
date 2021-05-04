import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { Family } from '../../services/persons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private service: PersonsService) { }

  ngOnInit(): void {
  }

  get families() {
  	return this.service.families;
  }

  changeCurrentFamily = (family: Family) => {
  	this.service.changeCurrentFamily(family);
  }

  addNewFamily = () => {
    this.service.addNewFamily();
  }

  removeFamily = (id: number) => {
    this.service.removeFamily(id);
  }

}
