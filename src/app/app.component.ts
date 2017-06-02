import { Component, ViewEncapsulation } from '@angular/core';
import { MyCoordinates } from "app/Models/Coordinates";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app works!';

  public simpleValue: string = '';
  public dropdownValue: string = '';
  public coordinatesModel: MyCoordinates = {
    latitude: 50,
    longitude: 10
  };

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }

  test(value) {
    console.log(value)
    console.log('--------------')
  }

}
