//  Day 01: Starting at 00:00
const functions = require('./functions');
//  toBe function
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});
//  not function
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});
//  toBeNull function
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//  toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
})
//  This should pass because null is a falsy Value
//  You cant use toBe with this one because an object in javascript is treated like an array where there could be multiple alias to the name.
test('User should be Jai Yang Object', () => {
    expect(functions.createUser()).toEqual( {
        firstName: 'Jai', 
        lastName:  'Yang'
    });
        });
//  toBeLessThanOrEqual function
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//  Day 02: Regex


test('There is no I in team', () => {
    expect ('team').not.toMatch(/I/);
})

// Day 03: Starting at 18:30 Sec

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['Jai', 'Noah', 'Kiara'];
    expect(usernames).toContain('Jai');
});

// Asynconized Data 

// Promise
// test('User fetched name should be Leanne Graham', () =>{
//    // expect.assertions(1); //
//     return functions.fetchUser()// return the promise
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     });
// });

// Async Await
test('User fetched name should be Leanne Graham', async () =>{
    // expect.assertions(1); //
     const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
 
 });