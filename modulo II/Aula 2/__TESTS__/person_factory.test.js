const PersonFactory = require('../person_factory')
const {Client, Employee} = require('../person')
var factory = new PersonFactory;

describe("factory of perspn",  () => {

    test("not passing the parameter should return null",()=>{
        expect(factory.getPerson()).toBeNull()
    })
    test("passed the invalid parameter admin should return null",()=>{
        expect(factory.getPerson("admin")).toBeNull()
    })
})


describe("Factore of Peron",()=>{
    test("passed a string with the client value, it shold return a new client objectud ",()=>{
        expect(factory.getPerson("client")).toBeInstanceOf(Client)
    })

    test("passed a string white the employees value, it sholud return a new employees object",() => {
        expect(factory.getPerson("employee")).toBeInstanceOf(Employee)
    })
})