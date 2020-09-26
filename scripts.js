const customerName = "Waqas"

var greetings = `Welcome ${customerName}`
console.log(greetings)

//DOM : Document Object Model 
//DOM Manipulation
var greetingContainer = document.querySelector(".greeting")
greetingContainer.innerHTML = `<strong>${greetings}</strong>`

console.log(document.querySelector(".greeting").innerHTML)

