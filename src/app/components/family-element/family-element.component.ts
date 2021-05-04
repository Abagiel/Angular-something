import { Component, OnInit, Input } from '@angular/core';

import { defaultFamily, blankFunction } from '../../services/default.values';
import { Family } from '../../services/persons';

@Component({
  selector: 'app-family-element',
  templateUrl: './family-element.component.html',
  styleUrls: ['./family-element.component.sass']
})
export class FamilyElementComponent implements OnInit {
	@Input() family: Family = defaultFamily(-2);
	@Input() changeCurrentFamily: Function = blankFunction;
	@Input() removeFamily: Function = blankFunction;

  constructor() { }

  ngOnInit(): void {}

}
