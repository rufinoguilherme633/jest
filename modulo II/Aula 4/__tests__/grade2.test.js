const average = require('../grade2')

//                           toBeGreaterThan toBeGreaterThanOrEqual
describe('Checking student grades',() => {
    // test('should check if avarenge of the grades 7,8 and 7 is greater than 6',()=>{
    //     expect(average(7,8,7)).toBeGreaterThan(6)
    // })

    // test("should check if avarange of the grades 6,6 and 6 isgrater than or equal to 6",() =>{
    //     expect(average(6,6,6)).toBeGreaterThanOrEqual(6)
     
    // })


    // //                          toBeLessThan e toBeLessThanOrEqual
    // test('should check if the avarange of the grades 4,5 and 8 is less than 6',()=>{
    //     expect(average(4,5,8)).toBeLessThan(6)
    // })

    // test('should check if the avarange of the grades 6,6 and 6 is less or equal than 6',()=>{
    //     expect(average(6,6,6)).toBeLessThanOrEqual(6)
    // })

    test("shoud check if avarange of the grades 4,3 and 6 id 4.33 ",() =>{
        expect(average(4,3,6)).toBeCloseTo(4.33)
    })

    test("shoud check if avarange of the grades 5,5 and 6 id 5.3 ",() =>{
        expect(average(5,5,6)).toBeCloseTo(5.3,1)
    })
})