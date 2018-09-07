import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  selected_clan: Clan;
  joined_users: User[] = [];


  constructor(private route: ActivatedRoute,
    private clanService: ClanService, private userService: UserService) { }

  ngOnInit() {
    this.getClan();
    this.getUsers();
  }

  getClan(): void {
    const id:number = +this.route.snapshot.paramMap.get('id');
  	this.clanService.getClan(id)
		.subscribe(ret_item=>{this.selected_clan = ret_item; console.log(ret_item)});
  }

  getUsers(): void {
    this.selected_clan.members.forEach(element => {
      this.userService.getUser(element).subscribe(item=>{this.add_user(item); console.log(item)})
    });
  }

  add_user(item: any): void{
    this.joined_users.push(item);
  }
}
