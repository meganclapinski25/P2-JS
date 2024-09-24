import {D} from '../src/index';


//Test Full Year
test('Full Year', () =>{
    const date = new D(2024, 8, 1);
    expect(date.year).toBe(2024)
})
//Test Small Year
test('Small Year', () =>{
    const date = new D(2024, 8,1);
    expect(date.yr).toBe(24)
})
//Test Full Month
test('Full Month', () =>{
    const date = new D(2024, 8,1);
    expect(date.month).toBe(8)
})
//Test Small Month
test('Small Month', () =>{
    const date = new D(2024, 8,1);
    expect(date.mon).toBe(8)
})
//Test Full Day
test('Full Day', () =>{
    const date = new D(2024, 9,24);
    expect(date.year).toBe('Tuesday')
})
//Test Small Day
test('Small Day', () =>{
    const date = new D(2024, 9,24);
    expect(date.year).toBe('Tue')
})
//Test Full Date
test('Full Date', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test Small Date
test('Small Date', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test Padded Hours
test('Padded Hours', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test Hours
test('Hours', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test Padded Minutes
test('Padded Minutes', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test  Minutes
test('Minutes', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test Padded Seconds
test('Padded Seconds', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
//Test  Seconds
test('Seconds', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})
