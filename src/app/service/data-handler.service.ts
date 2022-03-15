import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DataWebCam} from "../data/DataWebCam";


@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  webcamState = new BehaviorSubject<boolean>(DataWebCam.webcamOn)
  constructor() { }

  switchWebCamera(value:boolean){
    this.webcamState.next(value)
  }
}
