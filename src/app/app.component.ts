import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jackfruit Solutions!';

}
window.onbeforeunload = function(){
  window.scrollTo(0,0);
}
