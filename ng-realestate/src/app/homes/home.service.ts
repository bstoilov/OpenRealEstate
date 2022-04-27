import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  titles = [
    "Cozy apartement",
    "Luxury familiy home"
  ]

  profilePictures = [
    "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg",
    "https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e07f452/_orig/pixomatic_1572877263963.png",
    "https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png",
    "https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1e3b25/_orig/pixomatic_1572877090227.png",
    "https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e28993f/_orig/pixomatic_1572877034633.png",
    "http://thispix.com/wp-content/uploads/2015/06/Edit-3722-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Copy-of-Edit-1798-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Edit-3700-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Copy-of-edit-4241-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Edit-4850-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Edit-7576-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Edit_9509-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Edit-4750-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/edited-TSP_3683-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Edited-TSP_9353-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/E-3626-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/Copy-of-Edit-3840-1-300x300.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/014-150x150.jpg",
    "http://thispix.com/wp-content/uploads/2015/06/portrait-profile-014-150x150.jpg"
  ]

  descriptions = [
    "Set 8 km from Wembley Stadium, Heart of Ealing Apartment with Garden offers accommodation with a patio, as well as a garden",
    "Providing city views and free WiFi, Central London Suites - Fitzrovia provides accommodation conveniently situated in the centre of London, within a short distance of Dominion Theatre, British Museum.",
    "Featuring a shared lounge and a garden, Grenville provides accommodation in London with free WiFi and garden views. Private parking is available on site.",
    "Just 3 minutes’ walk from Aldgate and Tower Hill Tube Stations and 10 minutes’ walk from Tower Bridge, Native Tower Hill at India Street features air-conditioned, self-catering accommodation with free.",
    "Just 150 metres from Earls Court Tube Station, Park Grand London Kensington is a 5-minute walk from the famous Museum Mile. It features free WiFi, stylish bedrooms and a restaurant.",
    "Enjoying a central location in the heart of London, right next to Finsbury Square Garden and a short walk from Liverpool Street, Montcalm Royal London House-City of London offers free WiFi, a rooftop.",
    "In the Hammersmith and Fulham district of London, close to Stamford Bridge - Chelsea FC, Lux Apartments in Fulham by Dino features free WiFi and a washing machine.",
    "Marylebone Luxury Duplex is situated in London, 600 metres from Madame Tussauds, and features a patio, garden, and free WiFi. The property is 2.2 km from Oxford Street and 2.8 km from London Zoo.",
    "On the corner of a beautiful garden square, in London's prestigious Kensington, this modernised period building offers spacious, air-conditioned serviced apartments with free Wi-Fi.",
    "In the heart of London City district, this 5-star hotel offers luxury rooms with stylish bathrooms and iPod docks. The Barbican Train and Underground Station is less than a 10 minute walk away.",
    "This 5-star London hotel is quietly located next to Hyde Park, Marble Arch and Lancaster Gate Tube Station. The hotel offers breath-taking views of the famous London skyline.",
    "Situated 100 metres from Natural History Museum in London, No. 2 Queensberry Place by Stayo features accommodation with air conditioning and free WiFi.",
    "An elegant 19th-century town house, The Bailey’s Hotel London Kensington is centrally located in Kensington. These luxurious rooms are only 30 metres from the Gloucester Road Tube Station.",
    "In an excellent location, Caring Hotel offers comfortable, good value accommodation, just a short walk from Queensway Underground Station, Hyde Park, Kensington Gardens and Paddington Train Station."
  ]

  tags: Array<{ name: string, color: string }> = [
    {
      "name": "Taken",
      "color": this.randColor
    },
    {
      "name": "Sold",
      "color": this.randColor
    },
    {
      "name": "Free",
      "color": this.randColor
    },
    {
      "name": "Under Construction",
      "color": this.randColor
    },
    {
      "name": "Not Liveable",
      "color": this.randColor
    },
    {
      "name": "Down Payment",
      "color": this.randColor
    }
  ]

  images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2e/25/da/old-town-by-welcome-apartment.jpg?w=1400&h=-1&s=1",
    "https://thumbs.dreamstime.com/b/modern-apartment-building-5569745.jpg",
    "https://thumbs.dreamstime.com/b/orange-blanket-grey-sofa-modern-apartment-interior-po-orange-blanket-grey-sofa-modern-apartment-interior-119950743.jpg",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/288022358.webp?k=c2ba0009e9beb733bf77ea9df846a8138945d284b5e5033637fe202498ad5834&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/178765882.webp?k=1fa745a59ddd457739d7092f7dec03f83cd7d6b05bd5f313fac7e2eac54fa58d&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/225613152.webp?k=0a77b88f96603672b3be3c10cd0cf134f79e746fcfce01728725ea68ffe8ced8&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/331015633.webp?k=12b6c327f45946091da0681c403a96dfca49044b87840899643832acf1e6c9e0&o=&s=1",
    "https://t-cf.bstatic.com/xdata/images/hotel/square600/146637361.webp?k=2b1f5fe3d820d064952de01abbec280b6acbc8d1a0466ba028ff4b10396af141&o=&s=1",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595039357995-905cad2933e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1602161100872-7daa350808e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603920424053-a66f6788ba8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603090067595-c3febef4765f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1617202009609-74a52df21011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1622866306254-9b467542890c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1590058582642-b130d1620a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604757910114-785153749c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1552959078-f009e3ae920c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518494679888-8e283cf7d722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1562765659-778a52c2de62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542309175-9b88d743f89f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1592898918831-cc7eea4ea57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1528301719638-3f517aebc11c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1530411554903-7e745b9f1f6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1556378293-bff411f74c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533592584442-d4c03ec1afd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517978522111-60a4c81b2f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc2fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1498061390976-2b09e3889580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1596113199003-03babc2bdd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA5fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1590725175785-de025cc60835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616962010322-799af7a33cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQxfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1612320583354-02dd0cf04612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1537200086021-dd85d29e229f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU2fHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  ]

  public genRandomImage() {
    return this.getRandElement(this.images);
  }

  public genHomes() {
    let result = []
    for (let i = 0; i < 100; i++) {
      result.push({
        "title": this.getRandElement(this.titles),
        "description": this.getRandElement(this.descriptions),
        "mainImage": this.getRandElement(this.images),
        "images": this.genRandImages(25),
        "tag": this.getRandElement(this.tags),
        "profilePic": this.getRandElement(this.profilePictures)
      })
    }

    return result;
  }

  genRandImages(count: number) {
    let images = [];

    for (let i = 0; i < count; i++) {
      images.push(this.genRandomImage());
    }

    return images;
  }

  get randColor() {
    let base = 150;
    let range = 255 - base;
    let r = base + Math.floor(Math.random() * range);
    let g = base + Math.floor(Math.random() * range);
    let b = base + Math.floor(Math.random() * range);

    return `rgba(${r}, ${g}, ${b})`;
  }

  private getRandElement(arr: Object[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

}