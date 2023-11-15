import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP04';
  filters:any[] = ["",0] ;
  SendSearchParams($event : any){
    console.log($event);
this.filters = $event;
  }
}
