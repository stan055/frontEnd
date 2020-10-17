import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  cardsFirstLine = []
  cardsOther = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cardsFirstLine = this.dataService.getCards().slice(0, 3)
    this.cardsOther = this.dataService.getCards().slice(3)
  }

}
