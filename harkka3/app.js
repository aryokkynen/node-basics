var person =  {

	firstname : 'Test',
	lastname : 'Testersson',
	greet: function() {
		console.log('Hello ' + this.firstname + ' ' + this.lastname);
	}

}

person.greet();

console.log(person.firstname);
