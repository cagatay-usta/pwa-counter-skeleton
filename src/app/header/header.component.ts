import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private storageService: StorageService) {}

  exportData() {
    this.storageService.exportFile();
  }

  importData() {
    this.storageService.importFile();
  }
}
