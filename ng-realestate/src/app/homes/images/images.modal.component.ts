import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { faTrashCan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from "../home.service";

@Component({
  selector: 'home-images',
  templateUrl: './images.modal.component.html',
  styleUrls: ['./images.modal.components.css']
})
export class HomeImagesModal {
  constructor(public dialogRef: MatDialogRef<HomeImagesModal>,
              @Inject(MAT_DIALOG_DATA) data: any,
              private homeService: HomeService) {
    this.images = []
    for (let image of data) {
      this.images.push({
        "hovered": false,
        "image": image,
        "clicked": false
      });
    }
  }

  deleteIcon = faTrashCan;
  confirmIcon = faTrash;

  images: any = []

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  onImageHoverIn(image: any) {
    image.hovered = true
  }

  onImageHoverOut(image: any) {
    image.hovered = false
    image.clicked = false;
  }

  onImageClick(image: any) {
    image.clicked = true;
  }

  delImage(image: any) {
    if (image.clicked) {
      const index = this.images.indexOf(image);
      this.images.splice(index, 1)
    } else {
      this.onImageClick(image);
    }
  }

  addImage() {
    this.images.unshift({
      "hovered": false,
      "image": this.homeService.genRandomImage(),
      "clicked": false
    });
  }
}