class D {
	tempDate: Date;
	months: string[];
	days: string[];
	suffix: string[];



	constructor(...args:[number, number,number?,number?,number?,number?,number?]) {
		this.tempDate = new Date(...args)
		this.months =[
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		this.days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]
		this.suffix = [
			'st',
			'nd',
			'rd',
			'th',
		]
	}

//Year
	get year(): number{
		return this.tempDate.getFullYear();
	}

	get yr(): string{
		return this.tempDate.getFullYear().toString().slice(-2);
	}
//Months
