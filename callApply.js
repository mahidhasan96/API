const normalPerson = {
    firstName: "mahid",
    lastName: "hasan",
    salary: "15000",
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName: "baby",
    lastName: "babu vai",
    salary: 25000,
}
const friendlyPerson = {
    firstName: "sanjuda",
    lastName: "jakirul",
    salary: 25000,
}
//normalPerson.chargeBill();
const heroPersonBill = normalPerson.chargeBill.bind(heroPerson)
heroPersonBill(2000);
heroPersonBill(3000);
console.log(heroPerson.salary);

const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonBill(4000);
friendlyPersonBill(1000);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);

