import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MyDataItem } from 'src/app/interfaces/MyDataItem';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent implements OnInit {
  @Input() itemData: MyDataItem
  @Input() discount: number = 0
  
  discountColor: string = 'orange'

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.discountColor = this.discount > 69 ? '	crimson' : this.discount < 51 ? 'orange' : 'lightsalmon' 
  }

}
