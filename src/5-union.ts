//Union
//vertical bar creates union type
function kgToLbs(weight: number | string) {
	//Narrowing
	if (typeof weight === 'number') {
		return weight * 2.2;
	} else {
		return parseInt(weight) * 2.2;
	}
}

kgToLbs(10);
kgToLbs('10');
