import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { User } from '../model/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  

customersRecord:User[]=[]

constructor(private service : CustomerService , private route:Router) { }

ngOnInit(): void {
this.getCustomers();
}

getCustomers(){
  this.service.getCustomers().subscribe((data)=>{
    console.log(data);
     this.customersRecord = data;
  //   this.customersRecord.forEach((data)=>{
  //     console.log(data);}
  // )
  })
}

deleteUser(id:any)
{
  console.log(id);
 this.service.deleteUser(id).subscribe();
 alert("succcessfully deleted");
 window.location.reload();


}

update(id:any){
console.log(id);
this.service.getOnlyCustomer(id);
this.route.navigate(['update'])
}

logOut(){
  localStorage.removeItem('token');
  this.route.navigate(['login'])
}

}
