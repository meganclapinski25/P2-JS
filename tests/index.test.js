const {D} = require('index.ts')

test('Full Year', () =>{
    const date = new D(2024, 8,1);
    expect(date.year).toBe(2024)
})