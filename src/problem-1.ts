let value:unknown = "Hello Typescript"

const length1:number = (value as  string).length;
console.log(length1)

const length2:number = (<string>value).length
console.log(length2)