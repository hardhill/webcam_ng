import { Component, OnInit } from '@angular/core';
import {WebCam} from "../../lib/webcameasy";
import {SwitcherComponent} from "../switcher/switcher.component";

@Component({
  selector: 'app-webcam-panel',
  templateUrl: './webcam-panel.component.html',
  styleUrls: ['./webcam-panel.component.css']
})
export class WebcamPanelComponent implements OnInit {
  webcamElement: HTMLVideoElement | null
  webCamera:WebCam | null
  soundElement:HTMLAudioElement | null
  canvasElement:HTMLCanvasElement | null
  constructor() {
    this.webcamElement = null
    this.webCamera = null
    this.soundElement = null
    this.canvasElement = null
  }

  ngOnInit(): void {
    this.webcamElement = <HTMLVideoElement>document.getElementById("webcam")
    this.soundElement = <HTMLAudioElement>document.getElementById("snapSound")
    this.canvasElement = <HTMLCanvasElement>document.getElementById("canvas")
    this.webCamera = new WebCam(this.webcamElement,this.canvasElement,this.soundElement)

  }

}
