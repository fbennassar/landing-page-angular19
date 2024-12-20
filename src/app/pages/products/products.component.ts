import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, CategoryFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsList: IProduct[] = [];
  private _apiService = inject(ApiService);
  private router = inject(Router);
  loading:boolean = true;

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
      this.loading = false;
    });
  }

  navegate(id: number) {
    this.router.navigate(['/products', id]);
  }

  allProducts() {
    this.loading = true;
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productsList = data;
      this.loading = false;
    });
  }

  filterProductsByCategory(category: string) {
    if (!category) {
      return this.allProducts();
    }
    this.loading = true;
    this._apiService.getProductsByCategory(category).subscribe((data: IProduct[]) => {
      this.productsList = data;
      this.loading = false;
    });
  }
}
