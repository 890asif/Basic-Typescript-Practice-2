
const getLastElement = <T>(array:T[]):T=>{
    
    return array[array.length - 1]!;

}
const array = [10, 20, 30]
// const array = ["a", "b", "c"]
console.log(getLastElement(array))