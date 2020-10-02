import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isActive = false;
  isSubmenuActive = false;
  categoriesParams = {
    clothes: JSON.stringify({ category: ['clothes']}),
    healthy: JSON.stringify({ category: ['healthy']}),
    cosmetics: JSON.stringify({ category: ['cosmetics']}),
    mugs: JSON.stringify({ category: ['mugs']})
  };

  constructor() { }

  toggleNavbar( event?: any ): void{
    if (window.innerWidth >= 750 ) { return; }

    if (event){
      this.isActive = event;
    } else {
      this.isActive = !this.isActive;
    }
  }
  toggleSubmenu(): void{
    this.isSubmenuActive = !this.isSubmenuActive;
  }

}
