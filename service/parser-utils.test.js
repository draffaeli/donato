// parser-utils-test.js

const test = require('ava')
const parserUtils = require('./parser-utils')

// ---isEmpty tests

test("search-criteria-utils.isEmpty -> some string, return false", t => {
    // arrange
    const value = "pollo"

    // act
    let actualResponse = parserUtils.isEmpty(value);

    // assertions
    t.false(actualResponse)
})

test("search-criteria-utils.isEmpty -> undefined, return true", t => {
    // arrange
    const value = undefined

    // act
    let actualResponse = parserUtils.isEmpty(value);

    // assertions
    t.true(actualResponse)
})

test("search-criteria-utils.isEmpty -> blank spaces, return true", t => {
    // arrange
    const value = "       "

    // act
    let actualResponse = parserUtils.isEmpty(value);

    // assersions
    t.true(actualResponse)
})

test("search-criteria-utils.isEmpty -> empty string, return true", t => {
    // arrange
    const value = ""

    // act
    let actualResponse = parserUtils.isEmpty(value);

    // assersions
    t.true(actualResponse)
})

// ---sanitize tests

test("search-criteria-utils.sanitize -> string with blank spaces after and before, return the string in the middle", t => {
    // arrange
    const value = " arroz con pollo      "

    // act
    let actualResponse = parserUtils.sanitize(value);

    // assersions
    t.is(actualResponse, "arroz con pollo")
})
