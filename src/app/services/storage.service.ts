import { Injectable } from '@angular/core';

// TODO: convert retrievals to observables for live data sharing
// TODO: refactor methods for general key/value pairs instead of specific items

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
          }
        } catch (error) {
          console.error('Error importing data: ', error);
        }
      }
    };

    input.click();
  }
}
