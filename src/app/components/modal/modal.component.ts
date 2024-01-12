import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

// TODO: convert forms to dynamic forms to let modals and cards used for all item types

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() save = new EventEmitter();
  @Input() item: string = 'Ramen';

  constructor(public modalRef: MatDialogRef<ModalComponent>) {}

  foodForm = new FormGroup({
    name: new FormControl(this.item),
    calories: new FormControl(32),
  });
  onCancel() {
    return;
  }

  onSave() {
    this.save.emit();
  }
}
