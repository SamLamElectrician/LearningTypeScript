//Objects
//js --> dynamic
//ts --> objects have to be made
let employee: {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
} = {
	id: 1,
	name: 'Sam',
	retire: (date: Date) => {
		console.log(date);
	},
};

//some objects need to be read only --> use keyword readonly

//Type Alias

//how to make the object more dry if shape of employee is not consistent --> use type alias
type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employeee: Employee = {
	id: 1,
	name: 'Sam',
	retire: (date: Date) => {
		console.log(date);
	},
};
