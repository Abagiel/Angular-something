import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-p',
  templateUrl: './info-p.component.html',
  styleUrls: ['./info-p.component.sass']
})
export class InfoPComponent implements OnInit {
	@Input() title: string = '';
	@Input() content: string | number = '';

  constructor() { }

  ngOnInit(): void {
  }

}
