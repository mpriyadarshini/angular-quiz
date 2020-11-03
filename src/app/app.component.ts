import { Component, Input } from '@angular/core';
import { Service } from 'src/services/service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public values = [];
  i: number = 0;
  result = 0;

  constructor(private service: Service) {}
  ngOnInit() {
    this.service.getValues().subscribe((data) => (this.values = data));
    console.log(this.values);
  }

  onselect(item) {
    console.log(this.i);
    console.log(item);
    console.log(this.values[this.i].answer);
    if (item == this.values[this.i].answer) {
      this.result = this.result + 1;
      
    }
    if (this.i < this.values.length-1) {
      this.i = this.i + 1;
      
    }
  }
}
