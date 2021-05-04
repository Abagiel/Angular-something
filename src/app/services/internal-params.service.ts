import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalParamsService {
	isAddPersonForm: boolean = false;
	isOpenInfoBlock: boolean = false;

	blockWidth: number = 200;
	blockHeight: number = 65;
	headerHeight: number = 59;
	mainPadding: number = 20;

	openInfoBlock = () => this.isOpenInfoBlock = true;
	closeInfoBlock = () => this.isOpenInfoBlock = false;

	openPersonForm = () => this.isAddPersonForm = true;
	closePersonForm(e: any) {
		if (e && e.target.className !== 'modalForm') return;
		this.isAddPersonForm = false;
	}
}
