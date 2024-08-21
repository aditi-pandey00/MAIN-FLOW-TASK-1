import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {


  customeId:string ="";
  private apiUrl =
    'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp';
    
  constructor(private httpClient: HttpClient) {}

  generateToken(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.post(
      'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', data);
  }
  //to check that the user is logged in or not !!
  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getCustomers(): Observable<any> {
    return this.httpClient.get('http://localhost:9091/api/v1/get-all');
  }

  getOnlyCustomer(id:string){
   this.customeId = id;
  }
  
  storeData(data:Customer){
  // Construct the full URL
  const url = "http://localhost:9091/api/v1/save"
  // Make an HTTP POST request
  return this.httpClient.post(url,data);
  }

  updateCustomer(customerObj:User){

  const url  = "http://localhost:9091/api/v1/update-user"
  console.log(this.customeId);
  console.log(customerObj);
  // Make an HTTP Put request
  return this.httpClient.put(url,customerObj);
  }



  deleteUser(uuid: any) {

    // Make an HTTP Delete request
    console.log(uuid);
    const url = 'http://localhost:9091/api/v1/delete/'+uuid;
    console.log(url);
    return this.httpClient.delete('http://localhost:9091/api/v1/delete/'+uuid);
  }
}
