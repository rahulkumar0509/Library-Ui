import { Component, inject, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
  private dataService = inject(Data);
  ngOnInit(): void {
    this.dataService.getRequest("https://localhost:8081/v2/Books");
  }
}
