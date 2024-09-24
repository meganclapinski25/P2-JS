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
	get month(): string{
		const monthString = this.months[this.tempDate.getMonth()]
		return monthString
	}
	get mon(): string{
		const monthThree = this.months[this.tempDate.getMonth()].substring(0,3);
		return monthThree
		
	}
//Days
	get day(): string{
		const dayString = this.days[this.tempDate.getDay()];
		return dayString
	}
	get dy(): string{
		const dayThree = this.days[this.tempDate.getDay()].substring(0,3);
		return dayThree
	}
//Date
	get date(): number {
   	  return this.tempDate.getDate();
  	}
	get paddedDate(): string{
		const copyDate = this.tempDate.getDate();
		const padDate = copyDate.toString().padStart(2 , '0');
		return padDate
	}
//Time
	get hrs(): number{
		return this.tempDate.getHours()
	}

	get paddedHours(): string{
		const copyHours = this.tempDate.getHours();
		const padHours = copyHours.toString().padStart(2, '0');
		return padHours
	}

	get mins(): number{
		return this.tempDate.getMinutes()
	}

	get paddedMins(): string {
		const copyMins = this.tempDate.getMinutes();
		const padMins = copyMins.toString().padStart(2, '0');
		return padMins
	}

	get secs(): number{
		return this.tempDate.getSeconds()
	}

	get paddedSecs(): string {
		const copySecs = this.tempDate.getSeconds();
		const padSecs = copySecs.toString().padStart(2, '0');
		return padSecs
	}

//Mask Formatting
format(mask: string): string {
    const replace: { [key: string]: string | number } = {
      'Y': this.year, // Year full
      'y': this.yr,   // Year short
      'M': this.month, // Month full
      'm': this.mon,   // Month short
      'D': this.date,  // Date 
      'd': this.paddedDate, // Date padded
      'L': this.day,   // Day of Week full
      'l': this.dy,    // Day of Week short
      'h': this.hrs,
      'H': this.paddedHours,
      'i': this.mins,
      'I': this.paddedMins,
      's': this.secs,
      'S': this.paddedSecs
    };

    return mask.replace(/Y|y|M|m|D|d|L|l|h|H|I|S|i|s/g, (match: string) => replace[match].toString());
  }

  when(): string{
	const whenDate = new Date()
	const tempTime = this.tempDate.getTime() - whenDate.getTime();
	const tempDays = Math.floor(tempTime / (1000 * 60 * 60 * 24));

	let description: string;
	if (tempDays === 0) {
		return 'today';
	  } else if (tempDays > 0) {
		const futureDate = new Date(whenDate);
		futureDate.setDate(whenDate.getDate() + tempDays);

		const whenYears = futureDate.getFullYear() - whenDate.getFullYear();
     	const whenMonths = futureDate.getMonth() - whenDate.getMonth();
      	const whenDays = futureDate.getDate() - whenDate.getDate();

		  if (whenYears > 0) {
			description = `${whenYears} year${whenYears > 1 ? 's' : ''} from now`;
		  } else if (whenMonths > 0) {
			description = `${whenMonths} month${whenMonths > 1 ? 's' : ''} from now`;
		  } else {
			description = `${whenDays} day${whenDays > 1 ? 's' : ''} from now`;
		  }
		} else {
		  const pastDate = new Date(whenDate);
		  pastDate.setDate(whenDate.getDate() + tempDays); // diffDays is negative
	
		  const pastYears = whenDate.getFullYear() - pastDate.getFullYear();
		  const pastMonth = whenDate.getMonth() - pastDate.getMonth();
		  const pastDays = whenDate.getDate() - pastDate.getDate();
	
		  if (pastYears > 0) {
			description = `${pastYears} year${pastYears > 1 ? 's' : ''} ago`;
		  } else if (pastMonth > 0) {
			description = `${pastMonth} month${pastMonth > 1 ? 's' : ''} ago`;
		  } else {
			description = `${pastDays} day${pastDays > 1 ? 's' : ''} ago`;
		  }
		}
	
		return description;
	  }
  }
	

//-----Working------// 

//const d = new D(2017, 0, 2, 3, 4, 5)
// console.log( d.year )
// console.log( d.yr )
// console.log( d.month )
// console.log( d.mon )
// console.log(d.day)
// console.log(d.dy)
//console.log(d.date)
// console.log( d.hrs ) 
// console.log( d.mins )  
// console.log( d.secs ) 



// console.log(d.format('Y / m / D'));       // 17/Jan/2
//  console.log(d.format('h:i:s'))       // 03:04:05
//  console.log(d.format('H:I:S')) 
// console.log(d.format('h:i:s'))       // 3:4:5
// console.log(d.format('y-m-d h:i:s')) // 17-Jan-2 3:4:5 

// console.log(d.format('D'))
export{D}