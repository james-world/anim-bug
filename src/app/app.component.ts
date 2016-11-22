import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('text1state', [
      state('faded', style({
        opacity: 0
      })),
      transition('* => faded', animate('1s ease-out'))
    ]),
    trigger('text2state', [
      state('faded', style({
        opacity: 1
      })),
      transition('* => faded', animate('1s ease-in'))
    ])    
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  state: string;

  ngOnInit() {
    this.state = 'faded';
  }
}
