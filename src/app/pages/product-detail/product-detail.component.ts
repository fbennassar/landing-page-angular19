import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  loading:boolean = true;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public product?: IProduct; // ? means that the variable can be null

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductById(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    });
  }
}
