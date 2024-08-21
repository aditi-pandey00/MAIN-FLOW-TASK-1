import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  implements OnInit {

  customer:User ={}

  constructor(private service:CustomerService,private router :Router) { }

  ngOnInit(): void {
  }

  function1() {

    console.log(this.customer);
    
    this.service.storeData(this.customer).subscribe(
     
    );
    
     this.router.navigate(["home"])
     alert("succcessfully created");
    

}
} {

}
