import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-logo',
  templateUrl: './page-logo.component.html',
  styleUrls: ['./page-logo.component.scss']
})
export class PageLogoComponent implements OnInit {
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
