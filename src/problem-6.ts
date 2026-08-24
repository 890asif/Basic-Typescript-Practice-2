interface container<T>{
    item: T;
}
const numberContainer: container<number> = {
    item: 100
}

const stringContainer: container<string> = {
    item: "Books"
}

console.log(stringContainer)
console.log(numberContainer)