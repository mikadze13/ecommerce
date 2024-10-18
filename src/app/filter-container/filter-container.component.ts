import { Component } from '@angular/core';
import { CustomSliderComponent } from "../custom-slider/custom-slider.component"; 
@Component({
  selector: 'app-filter-container',
  standalone: true,
  imports: [CustomSliderComponent],
  templateUrl: './filter-container.component.html',
  styleUrl: './filter-container.component.css'
})
export class FilterContainerComponent {

}
