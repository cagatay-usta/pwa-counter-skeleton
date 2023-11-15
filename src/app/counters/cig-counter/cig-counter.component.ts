import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

// TODO: work on css

@Component({
  selector: 'app-cig-counter',
  templateUrl: './cig-counter.component.html',
  styleUrls: ['./cig-counter.component.scss'],
})
export class CigCounterComponent implements OnInit {
  cigaretteCount: number = 0;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.retrieveCigarettes();
    this.storageService.cigaretteSubject.subscribe((count) => {
      this.cigaretteCount = count;
    });
  }

  onIncreaseClick() {
    this.cigaretteCount++;
    this.storageService.storeItem('cigarettes', this.cigaretteCount);
  }

  onDecreaseClick() {
    if (this.cigaretteCount < 1) return;
    this.cigaretteCount--;
    this.storageService.storeItem('cigarettes', this.cigaretteCount);
  }
}
