import { Component, OnInit } from '@angular/core';

// TODO: Make local storage a service 

@Component({
  selector: 'app-cig-counter',
  templateUrl: './cig-counter.component.html',
  styleUrls: ['./cig-counter.component.css']
})
export class CigCounterComponent implements OnInit {
cigaretteCount: number = 0;

ngOnInit(): void {
    const localCigaretteCount = localStorage.getItem('cigaretteCount')
    if (localCigaretteCount) {
      this.cigaretteCount = +localCigaretteCount
    }
}

onIncreaseClick() {
  this.cigaretteCount++;
  localStorage.setItem('cigaretteCount', JSON.stringify(this.cigaretteCount));

}

onDecreaseClick() {
  if (this.cigaretteCount < 1) return;
  this.cigaretteCount--;
  localStorage.setItem('cigaretteCount', JSON.stringify(this.cigaretteCount));
}
}
