import { Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  @ViewChild('d3Container') nameInputRef: ElementRef;
  barChartData = [30, 86, 168, 250, 310, 368];

  constructor() {
  }

  genarateBarChart() {

    console.log(this.nameInputRef.nativeElement);
    d3.select(this.nameInputRef.nativeElement)
      .selectAll("div")
      .data(this.barChartData)
      .enter()
      .append("div")
      // .attr("class", "chart")
      .style("width", function (d) { return d + "px"; })
      .style("font", "10px sans-serif")
      .style("background-color", "steelblue")
      .style("text-align", "right")
      .style("padding", "3px")
      .style("margin", "1px")
      .style("color", "white")
      .text(function (d) { return d; });
  }
}
