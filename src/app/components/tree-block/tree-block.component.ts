import { Component, OnInit, Input } from '@angular/core';
import { InternalParamsService } from '../../services/internal-params.service';

import { defaultPerson, blankFunction } from '../../services/default.values';
import { Person } from '../../services/persons';

@Component({
  selector: 'app-tree-block',
  templateUrl: './tree-block.component.html',
  styleUrls: ['./tree-block.component.sass']
})
export class TreeBlockComponent implements OnInit {
	@Input() person: Person = defaultPerson();
	@Input() changeCurrentPerson: Function = blankFunction;
  @Input() removePerson: Function = blankFunction;

  constructor(private params: InternalParamsService) { }

  ngOnInit(): void {}

  removePersonHandler(id: number, e: MouseEvent) {
    this.removePerson(id, e);
    this.params.closeInfoBlock();
  }

  infoClickHandler(e: MouseEvent, person: Person) {
    e.stopPropagation();
    this.changeCurrentPerson(person);
    this.params.openInfoBlock();
  }

  clickHandler(e: MouseEvent, person: Person) {
    e.stopPropagation();
  	this.changeCurrentPerson(person);
  	this.params.openPersonForm();
  }
}
