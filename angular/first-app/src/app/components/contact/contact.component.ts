import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude: number = 50.387970
  longitude: number = 30.489794
  
  constructor() { }

  ngOnInit(): void {
  }

}
