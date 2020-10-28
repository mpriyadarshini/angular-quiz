import { Component } from '@angular/core';
import { Service } from 'src/services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public values = [];
  constructor(private service:Service){
    
  }
  ngOnInit(){
    this.service.getValues()
      .subscribe(data => this.values = data);
  }
}
