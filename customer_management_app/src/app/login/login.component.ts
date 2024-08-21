import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  feedback:any={
    'login_id':"",
    'password':""
};




constructor(private service : CustomerService , private route:Router) { }


  logIn(feedback:any){
    console.log(feedback.value);
    //  this.service.generateToken(feedback.value).subscribe((data)=>{
    //   console.log(data);
    //   // this.service.loginUser(data.access_token);
    //   this.route.navigate(['/home'])
    // });
    if(feedback.value){
      this.route.navigate(['home']);
    }

  
  }

}

// {
//   "login_id" : "test@sunbasedata.com",
//   "password" :"Test@123"
//   }
