import { Component } from '@angular/core';
import { MyCoordinates } from "app/Models/Coordinates";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public simpleValue: string = '';
  public coordinatesModel: MyCoordinates = {
    latitude: 50,
    longitude: 10
  };

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }

}
