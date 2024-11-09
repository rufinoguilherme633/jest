const users = require('../users');


describe("Checking  length of the items of array",()=>{
    test("should check if array has 3 items ",() =>{
        expect(users).toHaveLength(3)
       
    })

    test("should check if idex 2 is 4 caracters wide",() =>{
        expect(users[2]).toHaveLength(4)
    })


})