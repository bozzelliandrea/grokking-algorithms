// Non Ascending order comparator
function findBiggest(nums: number[]): number {
    let big_index = nums.length - 1;

    for(let i = 0; i < nums.length; i++)
        if(nums[i] > nums[big_index])
            big_index = i

    return big_index;
}

// Ascending order comparator
function findSmallest(nums: number[]): number {
    let small_index = 0;

    for(let i = 0; i < nums.length; i++) 
        if(nums[i] < nums[small_index]) 
            small_index = i;

    return small_index;
}

//TC O(n x n) = O(n^2)
function selectionSort(nums: number[]): number[] {

    const sortedArray: number[] = [];

    //TC O(n) 
    while(nums.length > 0) 
        sortedArray.push(nums.splice(findBiggest(nums), 1)[0]); //TC O(n) linear search every iteration

    return sortedArray;
}

function selectionSortCompare<T>(arr: T[], comparator: (arr: T[]) => number): T[] {

    const sortedArray: T[] = [];

    while(arr.length > 0) 
        sortedArray.push(arr.splice(comparator(arr), 1)[0]); 

    return sortedArray;
}

function arrayEquals<T>(a: T[], b: T[]) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function main(): void {

  let input: number[] = [3,5,21,4,12,10];
  let expect: number[] = [3,4,5,10,12,21];

  console.log("expected true", arrayEquals(expect, selectionSortCompare(input, findSmallest)));

  input = [3,5,21,4,12,10];

  console.log("expected false", arrayEquals(expect, selectionSortCompare(input, findBiggest)));

  input = [3,5,21,4,12,10];

  console.log("expected true", arrayEquals([21, 12, 10, 5, 4, 3], selectionSortCompare(input, findBiggest)));
}

main();
