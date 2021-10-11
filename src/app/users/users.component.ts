import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit 
{

  users : User[] = [];


  constructor(private service : UserServiceService, public dialog: MatDialog)
   { 
     
   }

  ngOnInit() : void
  {
   this.service.GetUsers().subscribe(x => this.users = x.slice(0,1000));;
  }

  onClick(id : number)
  {

  }


  openDialog(id : number) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {data: this.users[id]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


