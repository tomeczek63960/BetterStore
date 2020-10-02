import { Component, Input, OnInit, DoCheck, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements DoCheck {

  @Input() activePage: number;
  @Input() lastPage: number;
  prevPage;
  nextPage;
  @Output() pageEmmiter = new EventEmitter();


  constructor(private route: ActivatedRoute) { }

  ngDoCheck(): void {

    if (this.activePage){
      this.prevPage = this.activePage - 1;
      this.nextPage = this.activePage + 1;
    }

  }

  increasePage(): void{
    this.activePage ++;
    this.pageEmmiter.emit(this.activePage);
  }
  decreasePage(): void{
    this.activePage --;
    this.pageEmmiter.emit(this.activePage);
  }

}
