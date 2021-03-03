const base = require('../index');

test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})

test('add 0 + 4 to equal 4', () => {
    expect(base.add([0,4])).toBe(4);
})
test('add 0 + 4 + 3 to equal 7', () => {
    expect(base.add([0,4,3])).toBe(7);
})
test('add 0 to equal 0', () => {
    expect(base.add([0])).toBe(0);
})
test('pass empty array to return undefined', () => {
    expect(base.add([])).toBe(undefined);
})
test('add a string to return a 0', () => {
    expect(base.add(['0', '100'])).toBe('0100');
})


//subtract
test('subtract 1 - 2 to equal -1', () => {
    expect(base.subtract([1,2])).toBe(-1);
})

test('sub 0 + 4 to equal -4', () => {
    expect(base.subtract([0,4])).toBe(-4);
})
test('sub 0 + 4 + 3 to equal 7', () => {
    expect(base.subtract([0,4,3])).toBe(-7);
})
test('sub 0 to equal 0', () => {
    expect(base.subtract([0])).toBe(0);
})
test('pass empty array to return undefined', () => {
    expect(base.subtract([])).toBe(undefined);
})
test('sub a string to return a -100', () => {
    expect(base.subtract(['0', '100'])).toBe(-100);
})
test('sub a string bill from parrot to return a nah', () => {
    expect(base.subtract(['bill', 'parrot'])).toBe(NaN);
})

//divide
test('divide 1 / 1 to equal 1', () => {
    expect(base.divide([1,0])).toBe("error not finite");
})
test('divide 1 / 0 / 1 to equal error', () => {
    expect(base.divide([1,0,1])).toBe("error not finite");
})

test("divide 1 / '0' / 1 to equal error", () => {
    expect(base.divide([1,"0",1])).toBe("error not finite");
})
test("divide empty array to equal error", () => {
    expect(base.divide([])).toBe(undefined);
})

//multiple
test('multiple 1 * 1 to equal 1', () => {
    expect(base.multiple([1,1])).toBe(1);
})
test('multiple 1 * 0 to equal 1', () => {
    expect(base.multiple([1,0])).toBe(0);
})
test('multiple 1 * string to equal 1', () => {
    expect(base.multiple([1,'bill'])).toBe('error not finite');
})

//modulo
test('modulo 1 % 1 to equal 1', () => {
    expect(base.modulo([1,1])).toBe(0);
})
test('modulo 1 % 0 to equal 1', () => {
    expect(base.modulo([1,0])).toBe("error not finite");
})
test('modulo 1 % string to equal 1', () => {
    expect(base.modulo([1,'bill'])).toBe('error not finite');
})

//exponential
test('exponent 1 ** 1 to equal 1', () => {
    expect(base.pow([1,1])).toBe(1);
})
test('exponent 2 ** 3 to equal 8', () => {
    expect(base.pow([2,3])).toBe(8);
})
test('modulo 1 ** string to equal 1', () => {
    expect(base.pow([1,'bill'])).toBe('error not finite');
})