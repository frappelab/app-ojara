import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../../../assets/json/products'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  itemProducts = products;

  line = 'Adulto';

  cameraOrbit = '45deg 55deg 2.5m';
  src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  srcBase64 =
    'data:text/plain;charset=utf-8;base64,Z2xURgIAAAAwBQAAJAQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6IjNEIEJ1aWxkZXIiLCJ2ZXJzaW9uIjoiMi4wIn0sInNjZW5lIjowLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwibm9kZXMiOlt7Im1lc2giOjAsIm1hdHJpeCI6WzAuOTk5OTk5OTQwMzk1MzU1MjIsMCwwLDAsMCwtMS4xOTIwOTI4MjQ0NTM1Mzg5RS03LC0wLjk5OTk5OTgyMTE4NjA2NTY3LDAsMCwwLjk5OTk5OTgyMTE4NjA2NTY3LC0xLjE5MjA5MjgyNDQ1MzUzODlFLTcsMCwtMC4wMTk5OTg5OTkzMTI1MjAwMjcsNy41MDk5NDczMzA2NzUwMDQyRS05LDAuMDYyOTk3OTk2ODA3MDk4Mzg5LDFdfV0sIm1lc2hlcyI6W3sicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MH0sIm1vZGUiOjQsImluZGljZXMiOjEsIm1hdGVyaWFsIjowfV19XSwibWF0ZXJpYWxzIjpbeyJuYW1lIjoiR3JlZW4iLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjAxNTIwODUxNDQwNzI3NzEwNywwLjQ5NjkzMzA0MzAwMzA4MjI4LDAuMDcyMjcxODYxMTM1OTU5NjI1LDFdLCJtZXRhbGxpY0ZhY3RvciI6MCwicm91Z2huZXNzRmFjdG9yIjoxfSwiYWxwaGFNb2RlIjoiT1BBUVVFIn1dLCJhY2Nlc3NvcnMiOlt7ImJ1ZmZlclZpZXciOjAsImJ5dGVPZmZzZXQiOjAsImNvdW50Ijo4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJ0eXBlIjoiVkVDMyIsIm1pbiI6WzAsMC4wNDI5OTgwMDQ3MDQ3MTM4MjEsMF0sIm1heCI6WzAuMDM5OTk4MDAyMzUwMzMwMzUzLDAuMDgyOTk4MDA3NTM1OTM0NDQ4LDAuMDM5OTk4MDAyMzUwMzMwMzUzXX0seyJidWZmZXJWaWV3IjoxLCJieXRlT2Zmc2V0IjowLCJjb3VudCI6MzYsImNvbXBvbmVudFR5cGUiOjUxMjUsInR5cGUiOiJTQ0FMQVIifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjAsImJ5dGVMZW5ndGgiOjk2LCJieXRlU3RyaWRlIjoxMiwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVPZmZzZXQiOjk2LCJieXRlTGVuZ3RoIjoxNDQsInRhcmdldCI6MzQ5NjN9XSwiYnVmZmVycyI6W3siYnl0ZUxlbmd0aCI6MjQwfV19ICAg8AAAAEJJTgAAAAAArR4wPfLUIz3y1CM9rR4wPfLUIz0AAAAA3PqpPfLUIz3y1CM93PqpPQAAAAAAAAAArR4wPQAAAAAAAAAA3PqpPQAAAADy1CM9rR4wPQAAAADy1CM93PqpPfLUIz0AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAEAAAAAwAAAAYAAAAHAAAAAgAAAAEAAAAEAAAABgAAAAEAAAAEAAAAAgAAAAUAAAAHAAAAAQAAAAYAAAAFAAAAAgAAAAcAAAAEAAAAAAAAAAIAAAAGAAAAAwAAAAcAAAABAAAAAAAAAAQAAAAHAAAAAwAAAAUAAAA=';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.line = params['nameLine'];
      this.itemProducts = products.filter(prod => prod.line === params['line']);
      console.log(this.itemProducts);
    });
  }

  detail(item: any): void {
    sessionStorage.setItem('item', JSON.stringify(item));
    this.router.navigate(['/detail']);
  }
}
