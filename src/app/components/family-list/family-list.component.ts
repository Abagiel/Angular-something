import { Component, OnInit, Input } from '@angular/core';

import { blankFunction } from '../../services/default.values';
import { Family } from '../../services/persons';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.sass']
})
export class FamilyListComponent implements OnInit {
	@Input() list: Family[] = [];
	@Input() changeCurrentFamily: Function = blankFunction;
	@Input() addNewFamily: Function = blankFunction;
	@Input() removeFamily: Function = blankFunction;

  constructor() { }

  ngOnInit(): void {
  }

}
