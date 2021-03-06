import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationTransitionEvent,
  ChangeDetectorRef,
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
      state('done', style({
        opacity: 0
      })),            
      transition('* => faded', animate('1s ease-out'))
    ]),
    trigger('text2state', [
      state('faded', style({
        opacity: 0
      })),
      state('done', style({
        opacity: 1
      })),      
      transition('faded => done', animate('1s ease-in'))
    ])    
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  state: string;

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.state = 'faded';
  }

  text1animated(evt: AnimationTransitionEvent) {
    console.log(evt);
    if(evt.toState == 'faded')
    {
      this.state = 'done';
      // this line is required for transition to fire
      this.cdr.detectChanges();
    }
  }
}
