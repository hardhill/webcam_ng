import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})

export class SwitcherComponent implements OnInit {
  switchOnOff:boolean = false
  constructor(private dataHandler:DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.webcamState.subscribe(value => this.switchOnOff = value)
  }

  changeSwitchValue(value:any){
    this.dataHandler.webcamState.next(value.target.checked)
  }
}
