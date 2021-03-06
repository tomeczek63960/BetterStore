import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  title = '';
  selectedCategories = [];
  prevQuery;

  price = {
    min: 0,
    max: 1000
  };
  categories = [
    { value: 'clothes',  title: 'Ubrania', isActive: false },
    { value: 'mugs',  title: 'Kubki', isActive: false },
    { value: 'cosmetics',  title: 'Kosmetyki', isActive: false },
    { value: 'healthy',  title: 'Zdrowie', isActive: false }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  handleSubmit(): void{
    const range = `${this.price.min || 0}-${this.price.max || 1000}`;

    const params = this.route.snapshot.queryParams;

    if (window.innerWidth <= 900 ){
      window.scrollTo(0, 0);
    }
    this.router.navigate(['/products/filter'], {
      queryParams: {
        limit: 20,
        ...params,
        page: 1,
        filter: JSON.stringify({
          category: this.selectedCategories,
          range,
          title: this.title
        })
      }
    });
  }
  handlePriceChange(e: HTMLInputElement, type: string): void{
    this.price[type] = e.value;
  }
  handleCheckboxChange(e: HTMLInputElement): void{
    if (e.checked){
      this.selectedCategories.push(e.value);
    }else{
      this.selectedCategories = this.selectedCategories.filter(value => value !== e.value);
    }
  }
}
