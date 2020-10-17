import { Injectable } from '@angular/core';
import { data } from '../../assets/data';
import { from, Observable } from 'rxjs'
import { filter, take, scan } from 'rxjs/operators'
import { MyDataItem } from '../interfaces/MyDataItem';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataObs: Observable<any>
  titleCartData: MyDataItem
  arrCards: MyDataItem[]

  constructor() { 
    
    this.dataObs = from(data)

    this.dataObs.pipe(
      take(1),
      filter(val => val.main == true)
    ).subscribe(val => this.titleCartData = val)

    this.dataObs.pipe(
      filter(val => val.main == false),
      scan((acc, v) => acc.concat(v), [])
    ).subscribe(val => this.arrCards = val)

  }

  getData() {
    return data
  }

  getTitleItem() {
    return this.titleCartData
  }

  getCards() {
    return this.arrCards
  }

}
