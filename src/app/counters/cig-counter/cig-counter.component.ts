import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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
    this.cigaretteCount = this.storageService.retrieveItem('cigarettes');
    this.storageService.storageChange$.subscribe(() => {
      this.cigaretteCount = this.storageService.retrieveItem('cigarettes');
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
