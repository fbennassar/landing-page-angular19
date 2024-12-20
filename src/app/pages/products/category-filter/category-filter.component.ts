import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-filter',
  imports: [],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {

  categories = [ 'Electronics', 'Jewelery', 'Men\'s Clothing', 'Women\'s Clothing' ];

  private router = inject(Router);
  @Output() categorySelected = new EventEmitter<string>();

  filterByCategory(category: string) {
    category = category.toLowerCase();
    this.categorySelected.emit(category);
    
  }

  noFilter() {
    this.categorySelected.emit('');
  }
}
