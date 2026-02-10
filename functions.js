const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Jai'}
        user['lastName'] = 'Yang';
        return user;
    }
};



//These are arrow functions -- Same thing as: 
// add: function(num1, num2) {
//     return num1 + num2;}
module.exports = functions;