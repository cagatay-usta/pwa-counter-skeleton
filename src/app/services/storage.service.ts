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

  exportFile() {
    const data = JSON.stringify(localStorage);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(
      new Blob([data as BlobPart], { type: 'text/txt' })
    );
    a.download = 'export.txt';
    a.click();
  }

  importFile() {
    const input = document.createElement('input');
    input.type = 'file';

    let importedData: string = '';

    input.onchange = () => {
      input.files?.[0].text().then((data) => console.log(typeof data));
      console.log(importedData);
    };

    input.click();
  }
}
