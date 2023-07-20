import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sideMenu = false;

  title = 'app-ojara';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      /* tslint:disable:no-string-literal */
      if (params['sidemenu'] === "true") {
        this.sideMenu = true;
      } else {
        this.sideMenu = false;
      }
    });
  }

  lines(line: string, nameLine: string){
    this.router.navigate(['/dashboard'], { queryParams: { sidemenu: true, line: line, nameLine: nameLine } });
  }

  contact(){
    console.log('ENTRO')
    this.router.navigate(['/contact'], { queryParams: { sidemenu: true } });
  }

  close(){
    this.router.navigate(['/**'], { queryParams: { sidemenu: false } });
  }
}
