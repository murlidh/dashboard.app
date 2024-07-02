import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { User } from '../post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  users: User[] | any;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  

}
