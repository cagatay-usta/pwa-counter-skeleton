import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { defaultItem, modalItem } from './modal-item.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// TODO: convert forms to dynamic forms to let modals and cards used for all item types

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() save = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: modalItem,
    public modalRef: MatDialogRef<ModalComponent>
  ) {}

  modalForm = new FormGroup({
    name: new FormControl(this.data.name),
    calories: new FormControl(this.data.calories),
  });
  onCancel() {
    return;
  }

  onSave() {
    this.save.emit();
  }
}
