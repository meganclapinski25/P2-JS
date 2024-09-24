class D {
	_date: Date;
	months: string[];
	days: string[];
	suffix: string[];



	constructor(...args:[number, number,number?,number?,number?,number?,number?]) {
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
		this.suffix = [
			'st',
			'nd',
			'rd',
			'th',
		]
	}

//Year
	get year(): number{
		return this._date.getFullYear();
	}

	get yr(): string{
		return this._date.getFullYear().toString().slice(-2);
	}
//Months
	get month(): string{
		const monthString = this.months[this._date.getMonth()]
		return monthString
	}
	get mon(): string{
		const monthThree = this.months[this._date.getMonth()].substring(0,3);
		return monthThree
		
	}
//Days
	get day(): string{
		const dayString = this.days[this._date.getDay()];
		return dayString
	}
	get dy(): string{
		const dayThree = this.days[this._date.getDay()].substring(0,3);
		return dayThree
	}
//Date
	get date(): number {
   	  return this._date.getDate();
  	}
	get paddedDate(): string{
		const copyDate = this._date.getDate();
		const padDate = copyDate.toString().padStart(2 , '0');
		return padDate
	}
//Time
	get hrs(): number{
		return this._date.getHours()
	}

	get paddedHours(): string{
		const copyHours = this._date.getHours();
		const padHours = copyHours.toString().padStart(2, '0');
		return padHours
	}

	get mins(): number{
		return this._date.getMinutes()
	}

	get paddedMins(): string {
		const copyMins = this._date.getMinutes();
		const padMins = copyMins.toString().padStart(2, '0');
		return padMins
	}

	get secs(): number{
		return this._date.getSeconds()
	}

	get paddedSecs(): string {
		const copySecs = this._date.getSeconds();
		const padSecs = copySecs.toString().padStart(2, '0');
		return padSecs
	}

//Mask Formatting

	format(mask){
		const replace = {
			'Y': this.year, //Year full
			'y': this.yr,	//Year short
			'M': this.month, //Month full
			'm': this.mon,	//Month short
			'D': this.date,	//Date 
			'd': this.paddedDate, // Date padded
			'L': this.day, // Day of Week full
			'l': this.dy,  // Day of Week short 
			'h': this.hrs,
			'H': this.paddedHours,
			'i': this.mins,
			'I': this.paddedMins, 
			's': this.secs,
			'S': this.paddedSecs
			//# suffix


		};

		return mask.replace(/Y|y|M|m|D|d|L|l|h|H|I|S|i|s/g, match => replace[match])
	}
	
}
//-----Working------// 


// console.log( d.year )
// console.log( d.yr )
// console.log( d.month )
// console.log( d.mon )
// console.log(d.day)
// console.log(d.dy)
// console.log(d.date)
// console.log( d.hours ) 
// console.log( d.mins )  
// console.log( d.secs ) 



const d = new D(2017, 0, 2, 3, 4, 5)
// console.log(d.format('Y / m / D'));       // 17/Jan/2
 console.log(d.format('h:i:s'))       // 03:04:05
 console.log(d.format('H:I:S')) 
// console.log(d.format('h:i:s'))       // 3:4:5
// console.log(d.format('y-m-d h:i:s')) // 17-Jan-2 3:4:5 

// console.log(d.format('D'))
export{D}