import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
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
}
