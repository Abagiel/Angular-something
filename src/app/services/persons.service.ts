import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

import { defaultFamily, defaultPerson } from './default.values';
import { Family, Person, PersonInfo, Coords } from './persons';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {
	families: Family[] = this.storage.load();

	constructor(private storage: LocalStorageService) {}

	get familiesLength(): number {
		return this.families.length;
	}

	currentFamily: Family = defaultFamily(this.familiesLength);
	currentPerson: Person = defaultPerson();

	changeCurrentFamily = (family: Family = defaultFamily(this.familiesLength)) => {
		this.currentFamily = family;
	}

	changeCurrentPerson = (person: Person) => this.currentPerson = person;

	addNewFamily = () => {
		const newFamily = defaultFamily(this.familiesLength);
		this.families.push(newFamily);
		this.currentFamily = newFamily;
		this.saveToStorage();
	}

	removeFamily = (id: number) => {
		this.families = this.families.filter(family => family.id !== id);
		this.saveToStorage();
	}

	addNewPerson(coords: Coords = {left: '50%', top: '50%'}) {
		const person = defaultPerson();

		this.newCoords(coords, person);
		this.currentFamily.persons.push(person);
		this.saveToStorage();
	}

	newCoords(coords: Coords, person: Person = this.currentPerson) {
		if (coords?.left) {
			person.css.left = coords?.left;
			person.css.top = coords?.top;
		}
		this.saveToStorage();
	}

	removePerson = (id: number) => {
		this.currentFamily.persons = this.currentFamily.persons
			.filter(person => person.id !== id);
		this.saveToStorage();
	}

	changePersonInfo(personInfo: PersonInfo) {
		this.currentPerson.name = personInfo.name;
		this.currentPerson.birthYear = +personInfo.birthYear;
		this.currentPerson.deathYear = personInfo.deathYear || 0;
		this.currentPerson.age = personInfo.age;
		this.currentPerson.gender = personInfo.gender;
		this.currentPerson.list = personInfo.list;

		this.saveToStorage();
	}

	saveToStorage() {
		this.storage.save(this.families);
	}
}
