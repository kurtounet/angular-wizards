import { Component, inject } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  allUsers$ = inject(UserService).getAllUsers();

  ngOnInit(): void {
    console.log(this.allUsers$);
  }

}
