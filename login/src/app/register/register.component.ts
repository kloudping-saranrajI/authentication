import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 
  username:string=''
  email:string=''
  password:string='' 

  Register(){
    if(!(this.username && this.password && this.email)){
      alert('enter the required field')
    }else{
      alert('successfully register!')
    console.log("registration:",this.username,this.password,this.email)
    }
  }
}
