const Util = require('./math');



describe('Factorial', function () {



    test.each([

        [0, 1],

        [1, 1],

        [2, 2],

        [3, 6],

        [4, 24],

        [5, 120],

    ])(

        'Factorial %i equals to %i',

        (n, expected) => {

            expect(Util.factorial(n)).toBe(expected);

        },

    );



    test('Factorial of negative integers throws exception', () => {

        expect(()=> {Util.factorial(-10)}).toThrow();

    });

});

describe('isPrime', function () {



    test.each([

    

        [2, true],

        [10001, true],

        [4, false],

        [12028, false],

        

    ])(

        'isPrime %i equals to %i',

        (n, expected) => {

            expect(Util.isPrime(n)).toBe(expected);

        },

    );



    test('isPrime of negative integers throws exception', () => {

        expect(()=> {Util.isPrime(-10)}).toThrow();

    });

       test('isPrime of non integers throws exception', () => {

        expect(()=> {Util.isPrime('aaa')}).toThrow();

    });

});

describe('sumPrime', function () {



    test.each([

    

        [4, 5],

        [8, 17],

        [2, 2],


        

    ])(

        'sumPrime %i equals to %i',

        (n, expected) => {

            expect(Util.sumPrime(n)).toBe(expected);

        },

    );



    test('sumPrime of negative integers throws exception', () => {

        expect(()=> {Util.sumPrime(-10)}).toThrow();

    });

       test('sumPrime of non integers throws exception', () => {

        expect(()=> {Util.sumPrime('aaa')}).toThrow();

    });

});
