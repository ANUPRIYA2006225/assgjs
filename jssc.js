function person(FirstName ,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var Person1 = new person("Anupriya","Jha","America");
var Person2 = new person("Nikhil","Jha","England");
var Person3 = new person("Ruby","Jha","India");


console.log("Person1:")
console.log("FirstName: " + Person1.FirstName +" "+ "LastName: " + Person1.LastName + " "+ "OfficeAddress: " + Person1.OfficeAddress)
console.log("Person2:")
console.log("FirstName: " + Person2.FirstName + " "+ "LastName: " + Person2.LastName + " "+ "OfficeAddress: " + Person2.OfficeAddress)
console.log("Person3:")
console.log("FirstName: " + Person3.FirstName + " "+ "LastName: " + Person3.LastName +" " +"OfficeAddress: " + Person3.OfficeAddress )
