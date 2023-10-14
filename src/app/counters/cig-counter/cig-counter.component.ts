import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

// TODO: work on css

@Component({
  selector: 'app-cig-counter',
  templateUrl: './cig-counter.component.html',
  styleUrls: ['./cig-counter.component.css'],
})
export class CigCounterComponent implements OnInit {
  cigaretteCount: number = 0;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.cigaretteCount = this.storageService.retrieveCigarettes();
  }

  onIncreaseClick() {
    this.cigaretteCount++;
    this.storageService.storeCigarettes(this.cigaretteCount);
  }

  onDecreaseClick() {
    if (this.cigaretteCount < 1) return;
    this.cigaretteCount--;
    this.storageService.storeCigarettes(this.cigaretteCount);
  }
}
