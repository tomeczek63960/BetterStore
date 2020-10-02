import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, DoCheck} from '@angular/core';
import { Product } from 'src/app/products/interfaces/product';


@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent implements OnInit, DoCheck{
  @Input() products: Product[];
  @Input() searchbar: boolean;
  @Input() pagination: boolean;
  @Input() data;

  totalPages: number;
  currentPage: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  getProductRates(product: Product): string{
    const width = product.rates * 15;
    return `${width}px`;
  }

  ngOnInit(): void {
    if (this.data){
      this.products = this.data.response;
    }
  }

  ngDoCheck(): void {

    if (this.data && this.data.response !== this.products ){
      this.products = this.data.response;

      this.totalPages = this.data.total.page;

      if (this.data.prev){
        this.currentPage = this.data.prev.page + 1 || 1;
      }else if (this.data.next){
        this.currentPage = this.data.next.page - 1;
      }else{
        this.currentPage = 1;
      }

    }

  }
  changePage(e): void{
    const path = this.route.snapshot.routeConfig.path;
    const params = this.route.snapshot.queryParams;
    this.router.navigate( [ path ], { queryParams: { ...params, page: e }});
  }

  scrollTop(): void{
    window.scrollTo(0, 0);
  }
}
