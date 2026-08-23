let value:string | number = "100";
const result:number = Number(value) + 10;
console.log(result)

let data:string = "hello"
let riskyValue = data as unknown as number;
console.log(riskyValue)
