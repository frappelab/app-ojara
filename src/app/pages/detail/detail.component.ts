import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item: any;

  constructor( private router: Router) {}

  ngOnInit(): void {
    this.item = sessionStorage.getItem('item');
    this.item = JSON.parse(this.item);
  }

  back():void{
    this.router.navigate(['/dashboard'], { queryParams: { sidemenu: true, line: 'adulto' } });
  }
}
