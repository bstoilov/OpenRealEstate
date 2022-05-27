import annotationPlugin from 'chartjs-plugin-annotation';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { HomeService } from "../homes/home.service";

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('property_chart') propertyChart: ElementRef | undefined;
  @ViewChild('brokers_chart') brokersChart: ElementRef | undefined;


  constructor(private homeService: HomeService) {
    Chart.register(...registerables);
    Chart.register(annotationPlugin);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initPropertyStatusChart();
    this.initBrokersChart();
  }

  private initBrokersChart() {
    if (this.brokersChart == undefined) {
      return;
    }
    const homes = this.homeService.getHomes();
    const profilePicsCount: any = {};
    for (let home of homes) {
      if (home.profilePic in profilePicsCount) {
        profilePicsCount[home.profilePic] = profilePicsCount[home.profilePic] + 1;
      } else {
        profilePicsCount[home.profilePic] = 1;
      }
    }

    const pics = Object.keys(profilePicsCount);

    const labels = [];
    for (let pic of pics) {
      labels.push("Name")
    }

    const values = [];

    for (let pic of pics) {
      values.push(profilePicsCount[pic]);
    }

    const annotations: any = []

    let c = 0;
    for (let pic of pics) {
      let image: any = document.createElement("IMG");
      image['src'] = pic;
      let count = profilePicsCount[pic];
      annotations.push({
        type: 'label',
        drawTime: 'afterDraw',
        content: image,
        width: 50,
        height: 50,
        xValue: c,
        yValue: count-0.5,
        borderWidth: 1,
        callout: {
          enabled: true,
          position: 'left'
        }
      });
      c++;
    }

    const image: any = document.createElement("IMG");
    image['src'] = 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e28993f/_orig/pixomatic_1572877034633.png'
    const myChart = new Chart(this.brokersChart.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Dataset',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          annotation: {
            annotations: annotations
          }
        }
      }
    });
    myChart.draw();
  }

  private initPropertyStatusChart() {
    if (!this.propertyChart) {
      return;
    }

    let homes: any[] = this.homeService.getHomes();


    let tagCounts: any = {};

    for (let home of homes) {
      let tagName = home.tag.name;
      if (tagName in tagCounts) {
        tagCounts[tagName] = tagCounts[tagName] + 1;
      } else {
        tagCounts[tagName] = 1;
      }
    }

    let tags: any = {};

    for (let home of homes) {
      tags[home.tag.name] = home.tag;
    }

    let tagColors: any = {}

    for (let home of homes) {
      tagColors[home.tag.name] = home.tag.color;
    }

    let labels = Object.keys(tags).sort();
    let dataCounts = labels.map(tagName => tagCounts[tagName]);
    let colors = labels.map(tagName => tagColors[tagName])

    const myChart = new Chart(this.propertyChart.nativeElement, {
      type: 'polarArea',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Properties by status',
            data: dataCounts,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    myChart.draw();
  }
}