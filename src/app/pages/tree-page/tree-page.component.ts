import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { InternalParamsService } from '../../services/internal-params.service';

import { Person } from '../../services/persons';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.sass']
})
export class TreePageComponent implements OnInit {
  familyName: string | number = '';
  canMove: boolean = false;

  constructor(private service: PersonsService, private params: InternalParamsService) { }

  ngOnInit(): void {
    this.familyName = this.service.currentFamily.name;
  }

  get family() {
  	return this.service.currentFamily;
  }

  get isOpenInfoBlock() {
    return this.params.isOpenInfoBlock;
  }

  restoreCurrentFamily = () => {
  	this.service.changeCurrentFamily();
  }

  changeFamilyName(e: any) {
    this.service.currentFamily.name = e.target.textContent;
  }

  addNewPerson = (e: MouseEvent) => {
    const { x, y } = this.defineBlockPosition(e)
    this.service.addNewPerson({ left: x, top: y });
  }

  defineBlockPosition(e: MouseEvent) {
    const { blockWidth, blockHeight, headerHeight, mainPadding } = this.params;
    let x: number = e.pageX;
    let y: number = e.pageY - headerHeight;

    if (x - blockWidth / 2 < mainPadding) x = blockWidth / 2 + mainPadding;
    if (y - blockHeight / 2 < mainPadding) y = blockHeight / 2 + mainPadding;

    return { x: x + 'px', y: y + 'px' };
  }

  removePerson = (id: number, e: any) => {
    e.stopPropagation();
    this.service.removePerson(id);
  }

  changeCurrentPerson = (person: Person) => {
    this.service.changeCurrentPerson(person);
  }

  mousedownHandler = (e: any) => e.target.className.includes('info-block') ? this.canMove = true : null;
  mouseupHandler = () => this.canMove = false;
  mousemoveHandler(e: MouseEvent) {
    const { x, y } = this.defineBlockPosition(e);
    this.service.newCoords({ left: x, top: y });
  }
}
