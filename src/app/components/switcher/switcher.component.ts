import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onChanged = new EventEmitter<boolean>()
  switcherOnOff(event:any){
    const value = event.target.check
    this.onChanged.emit(value)
  }
}
