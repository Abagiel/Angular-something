import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFullName'
})
export class FormatFullNamePipe implements PipeTransform {

  transform(value: string): string {
  	const fullName = value.split(' ');
  	const firstName = fullName.slice(0, 1).join('');
  	const lastName = fullName.slice(1).join('');

  	if (lastName.length > 10) {
  		return firstName + ' ' + lastName[0].toUpperCase() + '.';
  	}

    return value;
  }

}
