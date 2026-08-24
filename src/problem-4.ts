type PaymentMethod = "cash" | "card" | "mobile";
const tyoeCheck = (method:PaymentMethod):object=>{
return { id: 1, method: method }

} 
const method = "cash";
console.log(tyoeCheck(method))