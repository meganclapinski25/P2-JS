const {D} = require('../dist/bundle.umd.js')


//Test Full Year
test('Full Year', () =>{
    const date = new D(2024, 8, 1);
    expect(date.year).toBe(2024)
})
//Test Small Year
test('Small Year', () =>{
    const date = new D(2024, 8,1);
    expect(date.yr).toBe("24")
})
//Test Full Month
test('Full Month', () =>{
    const date = new D(2024, 8,1);
    expect(date.month).toBe("September")
})
//Test Small Month
test('Small Month', () =>{
    const date = new D(2024, 8,1);
    expect(date.mon).toBe("Sep")
})
//Test Full Day
test('Full Day', () =>{
    const date = new D(2024, 8, 24);
    expect(date.day).toBe('Tuesday')
})
//Test Small Day
test('Small Day', () =>{
    const date = new D(2024, 8,24);
    expect(date.dy).toBe('Tue')
})

test('Full Date', () =>{
    const date = new D(2024, 8,24);
    expect(date.date).toBe(24)
})
//Test padded Date
test('Padded Date', () =>{
    const date = new D(2024, 8, '05');
    expect(date.paddedDate).toBe('05')
})
//Test Padded Hours
test('Padded Hours', () =>{
    const d = new D(2017, 0, 2, 3, 4, 5);
    expect(d.paddedHours).toBe('03')
})
//Test Hours
test('Hours', () =>{
    const d = new D(2017, 0, 2, 3, 4, 5);
    expect(d.hrs).toBe(3)
})
//Test Padded Minutes
test('Padded Minutes', () =>{
    const d = new D(2017, 0, 2, 3, 4, 5);
    expect(d.paddedMins).toBe('04')
})
//Test  Minutes
test('Minutes', () =>{
    const d = new D(2017, 0, 2, 3, 4, 5);
    expect(d.mins).toBe(4)
})
//Test Padded Seconds
test('Padded Seconds', () =>{
    const d = new D(2017, 0, 2, 3, 4, 5);
    expect(d.paddedSecs).toBe('05')
})
//Test  Seconds
test('Seconds', () =>{
    const d = new D(2017, 0, 2, 3, 4, 5);
    expect(d.secs).toBe(5)
})

test('when function year ago', () =>{
    const d = new D(2017, 9, 24);
    expect(d.when()).toBe('7 years ago')
})
test('when function year from now', () =>{
    const d = new D(2030, 9, 24);
    expect(d.when()).toBe('in 6 years')
})

test('when function day ago', () =>{
    const d = new D(2024, 8, 10);
    console.log(d);
    expect(d.when()).toBe('16 days ago')
})
test('when function day from now', () =>{
    const d = new D(2024, 8, 30);
    console.log(d);
    expect(d.when()).toBe('in 4 days ')
})
test('when function month from now', () =>{
    const d = new D(2024, 10, 10);
    console.log(d);
    expect(d.when()).toBe('in a month')
})
test('when function mmonth ago', () =>{
    const d = new D(2024, 3, 10);
    console.log(d);
    expect(d.when()).toBe('6 months ago')
})