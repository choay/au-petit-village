import { Component, Input, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @Input() title ='Au petit village';
  @Input() description ='est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix';



jsonUrl: string ='../../../assets/data/products.json';
private httpClient: HttpClient = inject(HttpClient);
products!: Product[];



ngOnInit(): void {
    this.httpClient.get('../../../assets/data/products.json').subscribe((data) => {
      this.products = data as Product[];
      
    });
}

sortProductsByPriceCroissant() {
  this.products.sort((a, b) => a.price - b.price);
}
sortProductsByPriceDecroissant() {
  this.products.sort((a, b) => b.price - a.price);
}

}


