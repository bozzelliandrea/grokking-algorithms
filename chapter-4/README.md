# Chapter 4 - Quicksort

### Exercises: Question and Answer

#### 4.1
Q: Write out the code for the earlier sum function.

A: 
```typescript

// assertion helper functions
function assertEquals(expected: number, actual: number[]): void {
    if(actual.reduce((a, b) => a + b, 0) == expected)
        console.log("Sum is correct:", expected)
    else
        throw new Error("Assertion fail, the sum is incorrect!");
}

/*
Write a function to sum an array of numbers using divide and conquer strategy

first find a base case: empty array or array of size 1
second find the recursive case: increment by 1 + sum(n - 1)
*/

function recrusive_sum(arr: number[]): number {

    if(arr.length == 0)
        return 0;

    if(arr.length == 1)
        return arr[0];


    return arr.splice(0, 1)[0] + recrusive_sum(arr);
}

assertEquals(recrusive_sum([2, 4, 6]), [2, 4, 6]);

assertEquals(recrusive_sum([1,2,3,4,5,6,7,8]), [1,2,3,4,5,6,7,8]);

assertEquals(recrusive_sum([200, 432, 62]), [200, 432, 62]);

// edge case
assertEquals(recrusive_sum([0]), [0]);
```
#### 4.2
Q: Write a recursive function to count the number of items in a list

A: 
```typescript

// assertion helper functions
function assertEquals(expected: number, actual: number): void {
    if(actual == expected)
        console.log("Success count is: ", expected)
    else
        throw new Error("Assertion fail, the count is incorrect!");
}

/*
Write a recursive function to count the number of items in a list

first find a base case: empty array 
second find the recursive case: if array size > 1; then sum = n + sum(n - 1)
*/

function recrusive_count(arr: number[]): number {

    if(arr.length == 0)
        return 0;

    arr.pop();
    return 1 + recrusive_count(arr);
}

assertEquals(3, recrusive_count([0, 2, 3]));

assertEquals(9, recrusive_count([0, 2, 3, 5, 6, 7, 8, 9, 10]));

assertEquals(0, recrusive_count([]));
```

#### 4.3
Q: Write out the code for the earlier sum function.

A: 

#### 4.4
Q: Write out the code for the earlier sum function.

A: 
