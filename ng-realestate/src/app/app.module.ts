import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomesComponent } from "./homes/homes.component";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MapModalComponent } from "./modals/map/map.modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { HomeImagesModal } from "./homes/images/images.modal.component";

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    MapModalComponent,
    HomeImagesModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
