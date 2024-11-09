const avarange = require("../grade");

beforeAll(() => {
  gradeOne = 4;
  gradeTwo = 8;
  gradeTree = 7;
  console.log('antes de tudo '+ gradeOne + gradeTwo+ gradeTree)

});

afterEach(() => { 
    gradeOne = 3;
    gradeTwo = 5;
    gradeTree = 4;
    console.log('a cada '+ gradeOne + gradeTwo+ gradeTree)

})

afterAll(() => {
    gradeOne = null;
    gradeTwo = null;
    gradeTree = null;
    console.log('a cada '+ gradeOne + gradeTwo+ gradeTree)

})
describe('Checking students grades',() => {
  test("should ckeck if the avarege     of the grades 4,8 and 7 is grather than 6", () => {
    expect(avarange(gradeOne,gradeTwo,gradeTree)).toBeGreaterThanOrEqual(6)
  });
  test("should ckeck if the avarege     of the grades 4,8 and 7 is grather than 6", () => {
    expect(avarange(gradeOne,gradeTwo,gradeTree)).toBeLessThanOrEqual(6)
  });
});

