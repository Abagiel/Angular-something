import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { PersonsService } from '../../services/persons.service';
import { InternalParamsService } from '../../services/internal-params.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.sass']
})
export class InfoFormComponent implements OnInit {
  list: FormArray;
	form = this.builder.group({
		fullName: [this.service.currentPerson.name, Validators.required],
		birthYear: [this.service.currentPerson.birthYear, Validators.required],
		deathYear: [this.service.currentPerson.deathYear || ''],
    age: [this.service.currentPerson.age, Validators.required],
    gender: [this.gender],
    list: this.listLength ? this.builder.array([]) : this.builder.array([this.createListItem()])
	});

  constructor(private builder: FormBuilder, private service: PersonsService, private params: InternalParamsService) { 
    this.list = this.form.get('list') as FormArray;
  }

  ngOnInit(): void {
    this.service.currentPerson.list.forEach(task => {
      this.listGroup.push(this.createListItem(task.name, task.isCompleted));
    });
  }

  get gender() {
    return this.service.currentPerson.gender === 'M' ? false : true;
  }

  get listLength() {
    return this.service.currentPerson.list.length;
  }

  get listGroup() {
    return this.form.get('list') as FormArray;
  }

  createListItem(name: string = '', isCompleted: boolean = false) {
    return this.builder.group({
      name: name,
      isCompleted: isCompleted
    });
  }

  addListItem(e: MouseEvent) {
    e.preventDefault();
    this.listGroup.push(this.createListItem());
  }
  removeListItem(id: number) {
    this.listGroup.removeAt(id);
  }

  getErrors(control: string, err: string) {
    return this.form.controls[control].errors?.[err] && this.getPristine(control);
  }
  getPristine(control: string) {
    return !this.form.controls[control].pristine
  }

  computeAge() {
    const { birthYear, deathYear } = this.form.value;

    if (birthYear && deathYear) {
      const age = deathYear - birthYear;

      this.form.controls.age.setValue(age);
    }
  }

  submit() {
    const { fullName, birthYear, deathYear, age, gender, list } = this.form.value;

    const newInfo = {
      name: fullName,
      birthYear: +birthYear,
      deathYear: +deathYear || 0,
      age: +age,
      gender: gender ? 'F' : 'M',
      list: list.length <= 1 && !list[0]?.name ? [] : list
    }

    this.params.closePersonForm(false);
    this.service.changePersonInfo(newInfo);
  }

}