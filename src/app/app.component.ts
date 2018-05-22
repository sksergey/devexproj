import { Component } from '@angular/core';
import { UserService} from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    // isUserSignin: boolean;
    // constructor(private userService: UserService) {
    //   isUserSignin = userService.getIsLoggedIn();
    // }

}
