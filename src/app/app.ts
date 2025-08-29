import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Data } from './data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('Library-Ui');
  constructor(private dataService: Data){
    
  }

  ngOnInit(): void {
    this.dataService.getBearerToken().subscribe({
      next: (v)=>{
        sessionStorage.setItem('token', v.toString());
      }, error: (e)=>{
        console.log(e);
      }
    })
  }
}
