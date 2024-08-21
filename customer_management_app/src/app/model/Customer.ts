export class Customer{

    uuid?: string | any
    first_name?: string
    last_name?: string
    street?: string
    address?: string
    city?: string
    state?: string
    email?: string
    phone?: string

    constructor() {
        this.uuid="";
        this.first_name = "";
        this.last_name = "";
        this.street = "";
        this.address = "";
        this.city = "";
        this.state ="";
        this.email="";
        this.phone="";
    
    }
}