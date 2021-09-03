import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
	width: number = window.innerWidth;

	get disableDragDrop() {
		return this.width > 450 ? true : false;
	}
	changeWidth(newWidth: number): void {
		this.width = newWidth;
	}
}
