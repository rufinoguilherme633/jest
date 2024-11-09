const users = require('../users');

describe('shouuld check if the array contains all the items in anoter array',() =>{
    var expectArray= ["José","Thomas"]
        test('user have items of expectArray',() =>{
            expect(users).toEqual(expect.arrayContaining(expectArray))
        })
   
})