class D {
	constructor(...args) {
		this._date = new Date(...args)
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
	}

//Year
	get year(){
		return this._date.getFullYear();
	}

	get yr(){
		return this._date.getFullYear().toString().slice(-2);
	}
//Months
	get month(){
		const monthString = this.months[this._date.getMonth()]
		return monthString
	}
	get mon(){
		const monthThree = this.months[this._date.getMonth()].substring(0,3);
		return monthThree
		
	}
//Days
	ge