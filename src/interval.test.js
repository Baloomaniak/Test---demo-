const Interval = require('./interval');


describe('Overlaps interval', function () {

it("Overlaps test case 1", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(5,20)
    expect(interval1.overlaps(interval2)).toBe(true);
})

     
it("Overlaps test case 2", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(11,20)
    expect(interval1.overlaps(interval2)).toBe(false);
})       

it("Overlaps test case 3", function(){
    let interval1 = new Interval(5,20)
    let interval2 = new Interval(1,10)
    expect(interval1.overlaps(interval2)).toBe(true);
})

it("Overlaps test case 4", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(10,20)
    expect(interval1.overlaps(interval2)).toBe(false);
})

it("Overlaps test case 5", function(){
    let interval1 = new Interval(10,20)
    let interval2 = new Interval(1,10)
    expect(interval1.overlaps(interval2)).toBe(false);
})

it("Overlaps test case 6", function(){
    let interval1 = new Interval(1,10)
    let interval2 = new Interval(1,10)
    expect(interval1.overlaps(interval2)).toBe(true);
})

it("Overlaps test case 7", function(){
    let interval1 = new Interval(11,20)
    let interval2 = new Interval(1,10)
    expect(interval1.overlaps(interval2)).toBe(false);
})






    });