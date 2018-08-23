import { Component } from '@angular/core';
const randomcat = require("./randomCat.js");

//declare var randomcat: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  //console.log( randomcat() );
}
