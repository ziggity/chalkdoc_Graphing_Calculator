import { Component } from '@angular/core';
declare let d3: any;
declare let functionPlot: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    console.log( 'Onit' )
    let ele = d3.selectAll('p')

    ele.style('background-color', 'red')

    functionPlot({
      target: '#quadratic',
      data:[{
        fn: 'x=1'
      }]
    })
  }
}

