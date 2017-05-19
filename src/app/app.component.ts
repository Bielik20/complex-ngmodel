import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public simpleValue: string = '';

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }

}
