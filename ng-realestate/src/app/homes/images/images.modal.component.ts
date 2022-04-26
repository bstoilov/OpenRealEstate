import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'home-images',
  templateUrl: './images.modal.component.html',
  styleUrls: ['./images.modal.components.css']
})
export class HomeImagesModal {
  constructor(public dialogRef: MatDialogRef<HomeImagesModal>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.images = data;
  }

  images = []

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}