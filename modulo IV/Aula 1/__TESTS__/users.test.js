const users = require('../users')

describe('Checking items of array',() =>{
    test('should check if the array contais the user maria',() =>{
        expect(users).toContain('Maria')
    })
    test('should check if the array not contais the user Julio',() =>{
        expect(users).not.toContain('Julio')
    })
})