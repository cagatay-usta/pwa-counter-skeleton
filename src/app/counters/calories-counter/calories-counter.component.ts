import { Component } from '@angular/core';
import {
  foodItem,
  commonItems as defaultCommonItems,
} from './food-items.consts';
import { ModalComponent } from 'src/app/components/modal/modal.component';

// TODO: track item usage to display common items
// TODO: only display all items if clicked
// TODO: add items inside cards and create button groups for adding/removing directly to cals

@Component({
  selector: 'app-calories-counter',
  templateUrl: './calories-counter.component.html',
  styleUrls: ['./calories-counter.component.scss'],
})
export class CaloriesCounterComponent {
  calories: number = 0;
  commonFoodItems: foodItem[] = defaultCommonItems;

  constructor() {}
}
