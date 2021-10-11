import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from '../company';
import { Address } from '../address';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  
  constructor(@Inject(MAT_DIALOG_DATA) public data : User) { }

  ngOnInit(): void {
  }

}
