import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-per-page',
  templateUrl: './select-per-page.component.html',
  styleUrls: ['./select-per-page.component.scss']
})
export class SelectPerPageComponent implements OnInit {
  selectActive = false;
  perPage = 20;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //   document.body.addEventListener('click', (e) => {
  //     if (!e.target.classList.contains('.select') && this.selectActive === true){
  //       this.selectActive = false;
  //     }

  //   });

    const prevParams = this.route.snapshot.queryParams;

    if (prevParams.limit){
      this.perPage = prevParams.limit;
    }else{
      this.perPage = 20;
    }
  }
  ngDoCheck(): void {
    const prevParams = this.route.snapshot.queryParams;

    if (prevParams.limit !== this.perPage){
      this.perPage = prevParams.limit || 20;
    }
  }
  setSelectActive(e): void{
    e.stopPropagation();
    this.selectActive = !this.selectActive;
  }
  changePerPage(e): void{
    this.perPage = e.target.value;
    // trzeba jakoś odświerzyć gdy limit się zmienia bo na wyszukiwaniu działa limit
    const params = { ...this.route.snapshot.queryParams, limit: this.perPage, page: 1 };
    this.router.navigate([ this.route.snapshot.routeConfig.path ], { queryParams : params });
  }
}
