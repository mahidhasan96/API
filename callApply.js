const normalPerson = {
    firstName: "mahid",
    lastName: "hasan",
    salary: "15000",
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount, tisk, tasx){
        console.log(this);
        this.salary = this.salary - amount - tisk - tasx;
        return this.salary;
    }
}
const heroPerson = {
    firstName: "baby",
    lastName: "babu vai",
    salary: 25000,
}
const firendPerson = {
    firstName:"mahid",
    lastName: "hasan",
    salary: 14000,
}
//normalPerson.chargeBill();
// const heroPersonBill = normalPerson.chargeBill.bind(heroPerson)
// heroPersonBill(2000);
// heroPersonBill(3000);
// console.log(heroPerson.salary);

// const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonBill(4000);
// friendlyPersonBill(1000);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900, 50, 50);
// normalPerson.chargeBill.call(heroPerson,1000, 100, 150);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(firendPerson, 900, 400, 300);
// console.log(firendPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[1000,400,300]);
normalPerson.chargeBill.apply(heroPerson,[4000,400,300]);
console.log(heroPerson.salary);
console.log(normalPerson.salary);