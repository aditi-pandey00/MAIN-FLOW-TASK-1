import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  customId: string="";
  customer: User={};
  filteredCustomers: User[] = [];

  constructor(private myService:CustomerService,private router :Router) { }

  ngOnInit(): void {
    this.getEmployeeById();
  }
  getEmployeeById() {
    this.customId = this.myService.customeId;

    this.myService.getCustomers().subscribe((data) => {
      this.filteredCustomers = data.filter((res: User) => {
        return res.userId === this.customId;
      });

      if (this.filteredCustomers.length > 0) {
        this.customer = this.filteredCustomers[0];
      }
    console.log(this.customer);
      
    });
  }
  
  function1(){
    this.myService.updateCustomer(this.customer).subscribe();
    alert("updated the record successfully")
    this.router.navigate(['home'])
    

  }
}
