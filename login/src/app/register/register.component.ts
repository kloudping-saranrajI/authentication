import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  Register() {
    if (!(this.username && this.password && this.email)) {
      this.errorMessage = 'Please enter all required fields';
    } else {
      // Prepare registration data
      const registrationData = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      // Make HTTP POST request to backend
      this.http.post<any>('http://127.0.0.1:5000/api/register', registrationData)
        .subscribe(
          response => {
            alert('Successfully registered!');
            console.log('Registration successful:', response);
            // Reset fields
            this.username = '';
            this.email = '';
            this.password = '';
            this.errorMessage = '';
          },
          error => {
            this.errorMessage = 'Error registering user';
            console.error('Registration error:', error);
          }
        );
    }
  }
}































// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthService } from '../auth.service';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient,HttpHeaders } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule,CommonModule,HttpClientModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {
 
//   username:string=''
//   email:string=''
//   password:string='' 
//   errorMessage:string=''

//   constructor(private authService: AuthService, private router: Router) {}

//   Register() {
//     if (!(this.username && this.password && this.email)) {
//       this.errorMessage = 'Please enter all required fields';
//     } else {
//       this.authService.register(this.username, this.password, this.email).subscribe(
//         response => {
//           alert('Successfully registered!');
//           console.log('Registration successful:', response);
//           this.router.navigate(['/login']); // Redirect to login page after successful registration
//         },
//         error => {
//           this.errorMessage = 'Error registering user';
//           console.error('Registration error:', error);
//         }
//       );
//     }
//   }
// }

