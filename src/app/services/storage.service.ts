import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  retrieveCigarettes() {
    const raw = localStorage.getItem('cigarettes');
    return raw ? JSON.parse(raw) : 0;
  }

  storeCigarettes(count: number) {
    localStorage.setItem('cigarettes', JSON.stringify(count));
  }
}
