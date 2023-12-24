import { Component } from '@angular/core';

// TODO: track item usage to display common items
// TODO: only display all items if clicked

@Component({
  selector: 'app-calories-counter',
  templateUrl: './calories-counter.component.html',
  styleUrls: ['./calories-counter.component.scss'],
})
export class CaloriesCounterComponent {
  calories: number = 0;
  commonItems: string[] = [
    'egg',
    'ramen',
    'cup-o-soup',
    'pasta',
    'yoghurt',
    'wrap',
    'rice',
  ];

  onDecreaseClick() {}

  onIncreaseClick() {}
}
