import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { blankFunction } from '../../services/default.values';
import { Family } from '../../services/persons';
import { SettingsService } from '../../services/settings.service';
import { PersonsService } from '../../services/persons.service';

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

  constructor(private settings: SettingsService, private persons: PersonsService) { }

  ngOnInit(): void {
  }

  get disableDragDrop() {
    return this.settings.disableDragDrop;
  }

  reorderList(e: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, e.previousIndex, e.currentIndex);
    this.persons.saveToStorage();
  }

  @HostListener('window:resize') onResize() {
    this.settings.changeWidth(window.innerWidth);
  }

}
