import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { inject } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-custom-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule, HttpClientModule], // Ensure HttpClientModule is imported
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomSliderComponent implements OnInit {
  productService = inject(ProductServiceService); // Use inject for the service
  products: Product[] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[] | undefined) => {
      this.products = products || [];
      console.log(this.products);
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      }, 
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info'; // Default case to handle unexpected statuses
    }
  }
}
