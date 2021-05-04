import { Component } from '@angular/core';
import { InternalParamsService } from './services/internal-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private params: InternalParamsService) {}

  get isAddPersonForm() {
  	return this.params.isAddPersonForm;
  }

  closePersonForm(e: any) {
  	this.params.closePersonForm(e);
  }
}
