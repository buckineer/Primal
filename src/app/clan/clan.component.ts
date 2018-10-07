import { Component, OnInit } from '@angular/core';
import { Clan } from '../models/clan.model';
import { ClanService } from '../services/clan.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { environment } from '../../environments/environment';
import {GlobalState} from '../state';
@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit {

  selected_clan: Clan = new Clan;
  joined_users: User[] = [];
  environment = environment
  admin_user:User = new User;


  constructor(private route: ActivatedRoute,
    private clanService: ClanService, private userService: UserService,
    public globalState:GlobalState) { }

  ngOnInit() {
    this.getClan();
  }

  getClan(): void {
    const id:number = +this.route.snapshot.paramMap.get('id');
  	this.clanService.getClan(id)
		.subscribe(ret_item=>{this.selected_clan = ret_item; this.getUsers();});
  }

  getUsers(): void {
    this.selected_clan.members.forEach(element => {
      this.userService.getUser(element).subscribe(item=>{this.add_user(item); console.log(item)})
    });
    this.userService.getUser(this.selected_clan.admin_user).subscribe(item=>{this.admin_user = item;})
  }

  add_user(item: any): void{
    this.joined_users.push(item);
  }
  is_admin_clan():boolean{
    return this.selected_clan.admin_user == this.globalState.Current_User_Id
  }
  get_user_image(user:User):string{
    return this.userService.get_avatar_url(user);
  }
}
