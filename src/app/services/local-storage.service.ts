import { Injectable } from '@angular/core';

import { Family } from './persons';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
	key: string = 'families';

	save(families: Family[]) {
		const data = JSON.stringify(families);
		localStorage.setItem(this.key, data);
	}

	load() {
		const data = localStorage.getItem(this.key);

		if (!data) return [];

		return  JSON.parse(data);
	}

  constructor() { }
}
