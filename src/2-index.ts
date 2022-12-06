//you can seperate large numbers with underscore in typescript
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

//You dont have to always annotate variables, ts compiler can infer based on value
let sale = 123_456_789;
let cours = 'TypeScript';
let is_publishe = true;
//TS assumes the type is any
//loses benefit of typescript
//avoid it
let level;

// function render(document){
//     console.log(document)
// }

//error can be resolved by annotaing or changing the ts.config file of noImplicity to false
function render(document: any) {
	console.log(document);
}

//Arrays

//using empty array, you should  declare type array
let numbers: number[] = [];
//offers code completion for typescipt
numbers.forEach((n) => n.toExponential);

//Tuples

//fixed length array
//push will screw around with it
//push will compile
//tuple is fixed length
//tuples useful with 2 values --> key value pairs
let user: [number, string] = [1, 'Sammy'];

//Enum

//Represent list of related constants

//Pascal Case --> camelcase but first letter of every word is capitalized
//using const will compile more optimized code
const enum Size {
	Small = 1,
	Medium = 2,
	Large = 3,
}
let mySize: Size = Size.Medium;
