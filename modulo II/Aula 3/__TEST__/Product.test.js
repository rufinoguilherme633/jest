const { describe } = require('node:test');
const Product = require('../Product');

describe("Test on product informstion",() =>{
    var product = new Product()
    product.description = 'biscoito'
    test('should return that the stock propriety is underfind',()=>{
        expect(product.stock).toBeUndefined()
    })    
    test('should return that the price propriety is underfind',()=>{
        expect(product.price).toBeUndefined()
    })  

    test("shoud return that the description is defined ",() =>{
        expect(product.description).toBeDefined()
    })
})