const normalPerson = {
    firstName: "mahid",
    lastName: "hasan",
    salary: "15000",
    fullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(5000);
normalPerson.chargeBill(500);
console.log(normalPerson.salary)