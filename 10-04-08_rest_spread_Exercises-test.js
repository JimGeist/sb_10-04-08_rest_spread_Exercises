describe("tests of function arraysAreTheSame", function () {
    beforeAll(function () {
        // initialization logic
        myTestArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //console.dir(myTestArray1);
        //myTestArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

    it("returns false when the same array object is passed in for both arguments", function () {
        expect(arraysAreTheSame(myTestArray1, myTestArray1)).toEqual(false);
    });
    it("returns false when the arrays are different lengths", function () {
        expect(arraysAreTheSame([1, 2, 3], [1, 2, 3, 4, 5])).toEqual(false);
    });
    it("returns false when the arrays have different element values", function () {
        expect(arraysAreTheSame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual(false);
    });
    it("returns true when the arrays with different reference objects have the same element values", function () {
        expect(arraysAreTheSame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(true);
    });
});


describe("tests of ES5 filterOutOdds and refactored ES2015 filterOutOddsNew function", function () {

    it("returns true when the results of the ES5 filterOutOdds and ES2015 filterOutOddsNew are the same", function () {
        expect(arraysAreTheSame(filterOutOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), filterOutOddsNew([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toEqual(true);
    });


});


describe("tests of findMin function", function () {

    it("returns -3 when passed 1,4,12,-3", function () {
        expect(findMin(1, 4, 12, -3)).toEqual(-3);
    });

    it("returns -3 when passed -3,1,4,12", function () {
        expect(findMin(-3, 1, 4, 12)).toEqual(-3);
    });

    it("returns -1 when passed 1,-1", function () {
        expect(findMin(1, -1)).toEqual(-1);
    });

    it("returns 1 when passed 3,1", function () {
        expect(findMin(3, 1)).toEqual(1);
    });


});


describe("tests of mergeObjects function", function () {
    it("returns true when mergeObjects({a:1, b:2}, {c:3, d:4}) returns {a:1, b:2, c:3, d:4}.", function () {
        expect(`${JSON.stringify(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))}`).toEqual(`${JSON.stringify({ a: 1, b: 2, c: 3, d: 4 })}`);
    });

    it("returns true when mergeObjects({a:3, b:2, c4}, {c:3, a:1, d:4}) returns {a:1, b:2, c:3, d:4}.", function () {
        expect(`${JSON.stringify(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))}`).toEqual(`${JSON.stringify({ a: 1, b: 2, c: 3, d: 4 })}`);
    });

});


describe("tests of mergeCombineObjects function", function () {
    it("returns true when mergeCombineObjects({a:1, b:2}, {c:3, d:4}) returns {a:1, b:2, c:3, d:4}.", function () {
        expect(`${JSON.stringify(mergeCombineObjects({ a: 1, b: 2 }, { c: 3, d: 4 }))}`).toEqual(`${JSON.stringify({ a: 1, b: 2, c: 3, d: 4 })}`);
    });

    it("returns true when mergeCombineObjects({a:3, b:2, c:4}, {c:3, a:1, d:4}) returns {a:4, b:2, c:7, d:4}.", function () {
        expect(`${JSON.stringify(mergeCombineObjects({ a: 3, b: 2, c: 4 }, { c: 3, a: 1, d: 4 }))}`).toEqual(`${JSON.stringify({ a: 4, b: 2, c: 7, d: 4 })}`);
    });

    it('returns true when mergeCombineObjects({name:"Geddy", b:2, c:3}, {name:" Lee", b:"2", c:4, d:4}) returns {name:"Geddy Lee", b:"22", c:7, d:4}.', function () {
        expect(`${JSON.stringify(mergeCombineObjects(
            { name: "Geddy", b: 2, c: 3 }, { name: " Lee", b: "2", c: 4, d: 4 }))}`).toEqual(`${JSON.stringify({ name: "Geddy Lee", b: "22", c: 7, d: 4 })}`)
    });
});


describe("tests of doubleAndReturnArgs functions", function () {

    it("returns true when doubleAndReturnArgs([1,2,3],4,4) returns [1,2,3,8,8]", function () {
        expect(arraysAreTheSame(doubleAndReturnArgs([1, 2, 3], 4, 4), [1, 2, 3, 8, 8])).toEqual(true);
    });

    it("returns true when doubleAndReturnArgs([2], 10, 4) returns [2, 20, 8]", function () {
        expect(arraysAreTheSame(doubleAndReturnArgs([2], 10, 4), [2, 20, 8])).toEqual(true);
    });

});


describe("tests of removeRandom function", function () {

    it("length returned is 0 when an empty array is passed to removeRandom", function () {
        expect(removeRandom([]).length).toEqual(0);
    });

    myRandomStuff = ["Def Leppard", "Metallica", "Queensryche", "Judas Priest", "Scorpions"];
    it("length of the array returned by removeRandom has a length of 1 less than the array passed in", function () {
        expect(removeRandom(myRandomStuff).length).toEqual(myRandomStuff.length - 1);
    });

});


describe("tests of extend function", function () {

    myRandomStuff = ["Def Leppard", "Metallica", "Queensryche", "Judas Priest", "Scorpions"];
    myRandomStuff2 = ["lettuce", "brocolli", "red peppers", "black olives", "celery", "croutons"];
    it("length of the array returned by extend has a length of the first array length plus the second array length", function () {
        expect(extend(myRandomStuff, myRandomStuff2).length).toEqual(myRandomStuff.length + myRandomStuff2.length);
    });

});


describe("tests of addKeyVal function", function () {

    it("object returned by addKeyVal contains the value passed in", function () {
        expect(addKeyVal({ name: "jim", zip: "07302", ownsCar: true }, "catName", "Taylor")["catName"]).toContain("Taylor");
    });

});


describe("tests of removeKey function", function () {

    it("object returned by removeKey does not have the key value passed in", function () {
        expect(removeKey({ name: "jim", zip: "07302", ownsCar: true, catName: "Taylor" }, "zip")["zip"]).toBeUndefined();
    });

});


describe("tests of combine function -- Combine two objects and return a new object", function () {

    it("object returned by combine contains all objects from object1 and object2 - test of first value in object1", function () {
        expect(combine({ name: "jim", zip: "07302", ownsCar: true }, { catName: "Taylor", adoptedFrom: "Hudson County Animal League" })["name"]).toEqual("jim");
    });

    it("object returned by combine contains all objects from object1 and object2 - test of last value in object1", function () {
        expect(combine({ name: "jim", zip: "07302", ownsCar: true }, { catName: "Taylor", adoptedFrom: "Hudson County Animal League" })["ownsCar"]).toEqual(true);
    });

    it("object returned by combine contains all objects from object1 and object2 - test of first value in object2", function () {
        expect(combine({ name: "jim", zip: "07302", ownsCar: true }, { catName: "Taylor", adoptedFrom: "Hudson County Animal League" })["catName"]).toEqual("Taylor");
    });

    it("object returned by combine contains all objects from object1 and object2 - test of last value in object2", function () {
        expect(combine({ name: "jim", zip: "07302", ownsCar: true }, { catName: "Taylor", adoptedFrom: "Hudson County Animal League" })["adoptedFrom"]).toEqual("Hudson County Animal League");
    });

});


describe("tests of update function -- return a new object with a modified key and value", function () {

    it("object returned by update unchanged because key did not exist", function () {
        expect(update({ name: "jim", zip: "07302", ownsCar: true }, "fullName", "Jim Geist")["fullName"]).toBeUndefined();
    });

    it("object returned by update has the key updated with the new value", function () {
        expect(update({ name: "jim", zip: "07302", ownsCar: true }, "name", "Jim Geist")["name"]).toEqual("Jim Geist");
    });

});

