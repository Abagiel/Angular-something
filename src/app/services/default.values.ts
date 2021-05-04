import { Family, Person } from './persons';

export function defaultFamily(length: number): Family {
	return {
		id: Date.now(), 
		name: `Group #${length + 1}`, 
		persons: []
	}
}

export function defaultPerson(): Person {
	const initLeft: string = '50%';
	const initTop: string = '50px';

	return {
		id: Date.now(),
		name: '',
		gender: 'M',
		birthYear: 0,
		age: 0,
		css: {
			left: initLeft,
			top: initTop
		},
		list: []
	}
}

export function blankFunction() {}