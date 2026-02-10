const functions = require('./functions');

//
//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});
//not
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});
//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy();
})
//This should pass because null is a falsy Value

//You cant use toBe with this one because an object in javascript is treated like an array where there could be multiple alias to the name.
test('User should be Jai Yang Object', () => {
    expect(functions.createUser()).toEqual( {
        firstName: 'Jai', 
        lastName:  'Yang'
});
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);


});

