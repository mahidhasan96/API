class person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;


    }
}
const hero = new person('mahid', 'hasa', 2000);
console.log(hero);
const firendlyPerson = new person('jamal', 'ahan', 200000);
console.log(firendlyPerson);

//old items
function person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new person1('jamula', 'nazmul', 18000);
console.log(oldPerson);