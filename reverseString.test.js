const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
})

// Making it not case sensative; we can git log --all -- "/Day05.md