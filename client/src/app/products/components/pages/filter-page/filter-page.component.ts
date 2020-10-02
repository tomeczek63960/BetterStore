import { ProductResponse } from './../../../interfaces/ProductResponse';
import { ProductService } from 'src/app/products/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
})
export class FilterPageComponent implements OnInit, DoCheck {
  products: ProductResponse;
  filter;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.filter = this.route.snapshot.queryParams;
    const page = this.filter.page;

    this.productService.getFilterProducts({...JSON.parse(this.filter.filter), limit: this.filter.limit, page}).subscribe(e => {
      this.products = e;
    });
  }

  ngDoCheck(): void{
    const paramFilter = this.route.snapshot.queryParams;
    const page = paramFilter?.page;

    if (this.filter !== paramFilter ){
      this.filter = paramFilter;
      this.productService.getFilterProducts({ ...JSON.parse( this.filter.filter ), limit: paramFilter.limit, page }).subscribe(e => {
        this.products = e;
      });
    }
  }

}
