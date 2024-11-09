const avarange = require('../grade')

describe('Checking student grades',() => {
    test('should return true for grades 6,7and 5',()=>{
        expect(avarange(6,7,5)).toBeTruthy()
    })

    test('should return false for grades 3,4 and 5',() =>{
        expect(avarange(3,4,5)).toBeFalsy()
    })
}) 