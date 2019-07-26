import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date = new Date().getFullYear();

  test: number;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
this.test = this.userService.cpt;
  }

}
