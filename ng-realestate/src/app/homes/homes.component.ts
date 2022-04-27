import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MapModalComponent } from "../modals/map/map.modal.component";
import { HomeImagesModal } from "./images/images.modal.component";
import { HomeService } from "./home.service";

@Component({
  selector: 'homes-component',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  constructor(public dialog: MatDialog, private homeService: HomeService) {
  }

  ngOnInit() {
    this.genHomes();
  }

  searchText = "";
  title = 'ng-realestate';
  mapDialogRef: any = null;
  homeImagesDialogRef: any = null;

  homes: any = []

  get properties() {
    if (this.searchText === "") {
      return this.homes;
    }
    return this.homes
      .filter((p: any) => p['title'].includes(this.searchText) || p['description'].includes(this.searchText))
  }


  private genHomes() {
    this.homes = this.homeService.genHomes();
  }

  genNewImage(home: any) {
    home['mainImage'] = this.homeService.genRandomImage();
  }

  openMapDialog() {
    this.mapDialogRef = this.dialog.open(MapModalComponent);
  }

  openImagesModal(home: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = home.images;

    this.homeImagesDialogRef = this.dialog.open(HomeImagesModal, dialogConfig);
  }
}