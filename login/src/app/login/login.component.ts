import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; 
  password: string = '';
  errorMessage: string = '';
 
  constructor(private http: HttpClient, private router: Router) {}
  
  loginValidate() { 
    if (!(this.username && this.password)) {
      this.errorMessage = 'Enter the required fields';
    } else  {
      this.http.post<any>('http://127.0.0.1:5000/api/login', { email: this.username, password: this.password })
        .subscribe(
          response => {
            alert('Successfully logged in!');
            console.log('Login successful', response);
            document.write('Welcome to my Home Page')
          },
          (error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.errorMessage = 'Invalid credentials. Please try again.';
            } else {
              this.errorMessage = 'An error occurred. Please try again later.';
            }
            console.error('Login Error:', error);
          }
        );
    }
  }
}




 
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { NgModel } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   standalone:true,
//   imports:[CommonModule,FormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   username: string = ''; 
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private http: HttpClient) {}
  
//   loginValidate() { 
//     if (!(this.username && this.password)) {
//       this.errorMessage = 'Enter the required fields';
//     } else {
//       // Assuming login endpoint is '/login' on your backend
//       this.http.post<any>('http://127.0.0.1:5000/api/login', { username: this.username, password: this.password })
//         .subscribe( 
//           response => {
//             alert('Successfully logged in!');
//             console.log('Login successful', response);
//             // Redirect to dashboard or desired route
//           },
//           error => {
//             this.errorMessage = 'Login error';
//             console.error('Login Error:', error);
//           }
//         );
//     }
//   }
// }





