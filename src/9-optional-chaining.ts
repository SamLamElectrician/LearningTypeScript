type Customer = {
	birthday: Date;
};

function getCustomer(id: number): Customer | null {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//can be refactored into optional chaining
if (customer !== null) {
	console.log(customer.birthday);
}

//refactored code
//uses ?. to optional chain
console.log(customer?.birthday);
