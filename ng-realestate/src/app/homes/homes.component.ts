import { Component } from "@angular/core";

@Component({
  selector: 'homes-component',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent {
  title = 'ng-realestate';



  images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2e/25/da/old-town-by-welcome-apartment.jpg?w=1400&h=-1&s=1",
    "https://thumbs.dreamstime.com/b/modern-apartment-building-5569745.jpg",
    "https://thumbs.dreamstime.com/b/orange-blanket-grey-sofa-modern-apartment-interior-po-orange-blanket-grey-sofa-modern-apartment-interior-119950743.jpg",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/288022358.webp?k=c2ba0009e9beb733bf77ea9df846a8138945d284b5e5033637fe202498ad5834&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/178765882.webp?k=1fa745a59ddd457739d7092f7dec03f83cd7d6b05bd5f313fac7e2eac54fa58d&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/225613152.webp?k=0a77b88f96603672b3be3c10cd0cf134f79e746fcfce01728725ea68ffe8ced8&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/331015633.webp?k=12b6c327f45946091da0681c403a96dfca49044b87840899643832acf1e6c9e0&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/146637361.webp?k=2b1f5fe3d820d064952de01abbec280b6acbc8d1a0466ba028ff4b10396af141&o=&s=1"
  ]

  get homes() {
    let result = []
    for (let i = 0; i < 100; i++) {
      let imageUrl = this.images[Math.floor(Math.random() * this.images.length)];
      result.push({
        "title": "2 story flat",
        "description": "Something",
        "image": imageUrl
      })
    }

    return result;
  }

  private getRandElement(arr) {
    let elememnt = arr[Math.floor(Math.random() * arr.length)];

  }
}