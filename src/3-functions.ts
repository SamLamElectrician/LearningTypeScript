//functions

//best practice, annotate functions, including parameters and return type
//use void if no value is returned
//place return type after parameter before function statements
function calculateTax(income: number): number {
	if (income < 50_000) {
		return income * 1.2;
	}
	//creates errors due to Js returning undefined from functions when income is greater than 50k
}

//turning on no implicit returns resolves this
function calculateTaxs(income: number): number {
	if (income < 50_000) {
		return income * 1.2;
	}
	return income * 1.3;
}

//adding an optional param, use the ? operator
//eg taxYear ?: number
// or assigning a value to the param ahead of time as seen below
function calculateTaxes(income: number, taxYear = 2022): number {
	if (taxYear < 2022) {
		return income * 1.2;
	}
	return income * 1.3;
}

//JS isn't strict on how many arguments you can pass through a function
//TS is strict so you can only pass the needed arguements
calculateTaxes(10_000, 2022, 1);
