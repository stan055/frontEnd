import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MyDataItem } from 'src/app/interfaces/MyDataItem'



@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnInit {
  itemData: MyDataItem
  discountColor: string = 'orange'

  @Input() discount: number = 0

  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.itemData = this.dataService.getTitleItem()
    this.discountColor = this.discount > 69 ? 'red' : this.discount < 51 ? 'orange' : 'pink' 
  }

}
