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
Q: Find the maximum number in a list.

A: 
```typescript

// assertion helper functions
function assertEquals(expected: number, actual: number): void {
    if(actual == expected)
        console.log("Assert success: ", expected)
    else
        throw new Error("Assertion fail, expected: " + expected + " actual: " + actual);
}

function assertThrows(fn: () => void, message: string) {
    try {
        fn();
    } catch (err) {
        console.log(message)
    }
}

/*
Find the maximum number in a list.
*/

function recrusive_max(arr: number[]): number {

    if(arr.length == 0)
        return 0;

    const n: number = arr.pop()!;
    const m: number = recrusive_max(arr);
    return n > m ? n : m;
}

assertEquals(3, recrusive_max([0, 2, 3]));

assertEquals(100, recrusive_max([100, 2, 3]));

assertThrows(() => assertEquals(100, recrusive_max([100, 200, 3])), "Expected exception, max number is 200");
```

Book answer
```python
def max(list):
    if len(list) == 2:
        return list[0] if list[0] > list[1] else list[1]
    sub_max = max(list[1:])
    return list[0] if list[0] > sub_max else sub_max
```

Tips: for the base case, we can use two number to compare which one is greater (but we need to know the size of the array is always equals or more than 2

#### 4.4
Q: Remember binary search from chapter 1? It’s a divide-and-conquer
algorithm, too. Can you come up with the base case and recursive
case for binary search?

A: 
```typescript

// assertion helper functions
function assertBinarySearch(expected: number, actual: number): void {
    if(actual == expected)
        console.log("Assert success: ", expected)
    else
        throw new Error("Assertion fail, expected: " + expected + " actual: " + actual);
}

/*
Binary search with divide & conquer

base case: low is greater than high, break the recursion and return -1 which means not found.
recursion case:  
    if middle value is greater than target, recursive binary search from low to middle - 1 (new high)
    if middle value is less than target, recursive BS from middle + 1 (new low) to high
    if target is equals to value, return middle index
*/

function binary_search(arr: number[], low: number, high: number, target: number): number {

    if(low > high)
        return -1;

    const middle = Math.floor((low + high) / 2); 
    const value = arr[middle];

    if(target == value)
        return middle;

    return value > target ? binary_search(nums, low, middle - 1, target) : binary_search(arr, middle + 1, high, target);
}


const nums: number[] = [0,1,2,3,4,5,6];
assertBinarySearch(2, binary_search(nums, 0, nums.length, 2));
assertBinarySearch(6, binary_search(nums, 0, nums.length, 6));
assertBinarySearch(0, binary_search(nums, 0, nums.length, 0));
assertBinarySearch(-1, binary_search(nums, 0, nums.length, 7));
```
