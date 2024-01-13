import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { defaultItem, modalItem } from '../modal/modal-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() item: modalItem = defaultItem;

  constructor(public modal: MatDialog) {}

  openModal() {
    this.modal.open(ModalComponent, { data: this.item });
  }
}
