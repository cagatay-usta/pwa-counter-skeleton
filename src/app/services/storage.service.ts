import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// TODO: convert retrievals to observables for live data sharing
// TODO: refactor methods for general key/value pairs instead of specific items


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  store = {
    itemTypes: ['cigarettes', 'calories'],
    cigaretteCount: 0,
  };
  cigaretteCount: number = 0;
  cigaretteSubject: Subject<number> = new Subject();

  constructor() {}

  retrieveCigarettes() {
    const raw = localStorage.getItem('cigarettes');
    this.cigaretteCount = raw ? JSON.parse(raw) : 0;
    this.cigaretteSubject.next(this.cigaretteCount);
  }

  // TODO
  retrieveItem(){}

  retrieveItems() {
    this.store.itemTypes.forEach((item) => {
      const storedValue = localStorage.getItem(item);
      if (storedValue) {
        try {
           this.store[item as keyof typeof this.store] = JSON.parse(storedValue)
        } catch (error) {
          console.error(`Error parsing ${item}: ${error}`);
        }
      }
    });
  }

  storeItem(key: string, count: number) {
    localStorage.setItem(key, JSON.stringify(count));
  }

  exportFile() {
    try {
      const data = JSON.stringify(localStorage);
      const a = document.createElement('a');
      a.href = URL.createObjectURL(
        new Blob([data as BlobPart], { type: 'text/txt' })
      );
      a.download = 'export.txt';
      a.click();
    } catch (error) {
      console.error('Error exporting data: ', error);
    }
  }

  importFile() {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = async () => {
      if (input.files && input.files[0]) {
        try {
          const importedData = await input.files[0].text();
          if (importedData) {
            localStorage.clear();
            const parsedData = JSON.parse(importedData);
            Object.keys(parsedData).forEach((key) => {
              localStorage.setItem(key, parsedData[key]);
            });
            this.retrieveCigarettes();
          }
        } catch (error) {
          console.error('Error importing data: ', error);
        }
      }
    };

    input.click();
  }
}
