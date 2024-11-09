const division = require("../division")

describe('Checking exception',() =>{
    test('should throw an exception ',() =>{
        expect(()=>{
            division(25,0)
        }).toThrow()
    })

    test('should not throw an exception ',() =>{
        expect(() =>{
            division(24,2).not.toThrow()
        })
    })    
})