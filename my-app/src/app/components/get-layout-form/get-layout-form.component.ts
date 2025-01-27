import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-layout-form',
  templateUrl: './get-layout-form.component.html',
  styleUrls: ['./get-layout-form.component.css']
})

export class GetLayoutFormComponent implements OnInit {
  selectedProduct: "1" | "2" | "3" | "4" = "1";  
  products: { name: string }[] = [];
  product_layout = {
    "1": "1:1",
    "2": "1:2",
    "3": "1:1:1",
    "4": "1:2:4"
  };
  layout: string = "";
  num_of_products: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.fetchProductCount();  
  }

  onSubmit() {
    if (this.selectedProduct) {
      this.layout = this.product_layout[this.selectedProduct];
      localStorage.setItem("Layout", this.layout)
      this.router.navigate(['/template']);
      this.fetchProductCount();
    }
  }

  onSubmitProduct() {
    console.log('Product names:', this.products);
  }

  fetchProductCount() {
    if (this.selectedProduct == "1") {
      this.num_of_products = 2;
    } else if (this.selectedProduct == "2" || this.selectedProduct == "3") {
      this.num_of_products = 3;
    } else {
      this.num_of_products = 7;
    }
    
    this.products = Array.from({ length: this.num_of_products }, () => ({ name: '' }));
  }
}
