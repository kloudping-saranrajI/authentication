import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string=''
  password:string=''

    loginValidate(){
      
      if(!(this.username && this.password)){
        alert('enter the required field!')

      }
       if(this.username=='user' && this.password=='pass'){
            alert('successfully login')
           document.write('successfully login!')
      }else{
        alert('invalid username and password!')
      }

    }

}
