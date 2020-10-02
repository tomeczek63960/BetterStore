import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent  {
  @Input() isActive: boolean;
  @Output() toggleNavbar = new EventEmitter();

  constructor() { }

  toggle(): void{
    this.isActive = !this.isActive;
    this.toggleNavbar.emit(this.isActive);
  }

}
