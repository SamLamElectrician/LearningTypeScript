function greet(name: string) {
	if (name) {
		console.log(name.toLocaleUpperCase());
	} else {
		console.log('Hola!');
	}
}

//typescript runs an error when trying to input a null type into a string
greet(null);

//to bypass this null error, you can pass a union type into the greet function with null and undefined

function greets(name: string | null | undefined) {
	if (name) {
		console.log(name.toLocaleUpperCase());
	} else {
		console.log('Hola!');
	}
}

greets(null);
