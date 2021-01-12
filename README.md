# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @samjanderson/lotide`

**Require it:**

`const _ = require('@samjanderson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first item in an array
* `tail`: returns everything but the first item in an array
* `middle`: returns the middle element in an odd number array and the two middle elements in an even numbered array
* `eqArrays`: returns true if two arrays are equal
* `without`: returns a subset of a given array, removing unwanted elements
* `takeUntil`: this function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `map`: consoles log true or false based on if our expected condition that we test meets our actual outcome
* `letterPositions`: this will return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue`:  helps us search for a key on an object where its value matches a given value.
* `findKey`: scans an object and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `eqObjects`: checks if two objects are equal and returns true or false
* `countOnly`:  takes in a collection of items and return counts for a specific subset of those items
* `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `assertObjectsEqual`: checks to see if two objects are equal and logs a pass or fail
* `assertEqual`: checks to see if an expected outcome is equal to an actual outcome and logs a pas or fail
* `assertArraysEqual`: checks to see if two arrays are equal and console logs a pass or fail
