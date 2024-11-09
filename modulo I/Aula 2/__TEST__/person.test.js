const Person = require('../person')
var paulo = new Person("Paulo Gilberto da Silva","paulo.gilberto@com.br",new Date(1980,5,12))

var obj_test = new Person("Paulo Gilberto da Silva","paulo.gilberto@com.br",new Date(1980,5,12))

test("should check if the object paulo equal the object test",()=>{
    expect(paulo).toEqual(obj_test)
})