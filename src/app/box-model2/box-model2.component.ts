import { Component } from '@angular/core';

@Component({
  selector: 'app-box-model2',
  templateUrl: './box-model2.component.html',
  styleUrls: ['./box-model2.component.css']
})
export class BoxModel2Component {
  selectedUnit: number | null = 0;

  sizes = ['S', 'M', 'L', 'XL'];
  colors = ['Red', 'Blue', 'Black', 'White'];

  units = [
    {
      label: '1 Unit',
      discount: '10% off',
      price: '$10.00 USD',
      originalPrice: '$24.00 USD',
      size: '',
      color: '',
    },
    {
      label: '2 Unit',
      discount: '20% off',
      price: '$18.00 USD',
      originalPrice: '$24.00 USD',
      size: '',
      color: '',
    },
    {
      label: '3 Unit',
      discount: '30% off',
      price: '$24.00 USD',
      originalPrice: '$24.00 USD',
      size: '',
      color: '',
    },
  ];

  selectUnit(index: number) {
    this.selectedUnit = index;
  }

  get selectedTotal() {
    return this.units[this.selectedUnit!]?.price ?? '$0.00';
  }
}

