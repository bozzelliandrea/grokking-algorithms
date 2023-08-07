/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.  => required search in O(log n) so binary search

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

TC: O(log(m + n)) where m is the dimension of the matrix and n is the size of the row where the target could be.
SC: O(1)
*/
function binarySearch(arr: number[], target: number): number {

    if(arr.length == 0)
        return -1;

    let left: number = 0;
    let right: number = arr.length - 1;

    while(left <= right) {

        const middle: number = Math.floor((right + left) / 2);
        const middleVal: number = arr[middle];

        if(middleVal == target)
            return middle;

        if(middleVal > target)
            right = middle - 1;
        else
            left = middle + 1;
    }

    return -1;
}

function searchMatrix(matrix: number[][], target: number): boolean {

    for(let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];

        if(row[row.length - 1] < target)
            continue;
        
        if(row[0] <= target && row[row.length - 1] >= target)
            return binarySearch(row, target) != -1;

        if(row[0] > target)
            break;
    }

    return false;
};
