import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    {
      handle: 'clothes',
      title: 'Ubrania',
      filter: JSON.stringify({ category: ['clothes']}),
    },
    {
      handle: 'cosmetics',
      title: 'Kosmetyki',
      filter: JSON.stringify({ category: ['cosmetics']}),
    },
    {
      handle: 'mugs',
      title: 'Kubki',
      filter: JSON.stringify({ category: ['mugs']}),
    },
    {
      handle: 'healthy',
      title: 'Zdrowie',
      filter: JSON.stringify({ category: ['healthy']})
    },
  ];

  scrollTop(): void{
    window.scrollTo(0, 0);
  }
}
