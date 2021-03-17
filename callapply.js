const normalPerson = {
    firstName:'Asif',
    lastName:'Iqbal',
    salary: 15000,
    getFullname: function(){
    console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount,tax,tips){
    this.salary = this.salary -amount-tax-tips;
    return this.salary;
    }
}
normalPerson.chargeBill(500,100,50);
console.log(normalPerson.salary);

const heroPerson = {
    firstName:"Sakif",
    lastName:"Dewan",
    salary:30000
}

const friendlyPerson = {
    firstName:"Fazle",
    lastName:"Arafat",
    salary:70000
}

const heroBill = normalPerson.chargeBill.bind(heroPerson);
// heroBill(3000);
// heroBill(500);
console.log(heroPerson)

const friendBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendBill(15000);
console.log(friendlyPerson);

normalPerson.chargeBill.call(friendlyPerson,10000);
console.log(friendlyPerson);



const familyPerson = {
    firstName:"Rouf",
    lastName:"Sufia",
    salary:100000
}

normalPerson.chargeBill.apply(familyPerson,[1000,100,50]);
console.log(familyPerson);