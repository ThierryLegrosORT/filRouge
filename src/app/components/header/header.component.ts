import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = "Rez Soc";

  test: number;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.test = this.userService.cpt;
  }

}