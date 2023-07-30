/**

https://leetcode.com/problems/sort-colors/description/
Constraint:  Do not return anything, modify nums in-place instead.


using selection sort
TC O(n^2)
SC O(1) swap in place without new array and void return type, so constant time complexity

Algo logic:

[2,0,1]
----
i = 0
last = 3 - 1 - 0 = 2
max = 
  ----
  max = 2
    i = 0
    num[i] = 2 
    num[max]= 1
    2 > 1 true -> max = 0
    --
    i = 1
    num[i] = 0
    num[max] = 2
    0 > 2 false
    --
    i = 2
    skip
  max = 2
  swap
    tmp = arr[last] = arr[2] = 1
    arr[last] = arr[max] => arr[last] == 2
    arr[max] = tmp => arr[max] == 1
---- 
iterate through the end of the array, every iteration last decrease the value by 1
 */
function sortColors(nums: number[]): void {

    for(let i = 0; i < nums.length; i++) {
        const last = nums.length - 1 - i;
        const max = findMax(nums, last);
        swap(last, max, nums);
    }
};

function findMax(nums: number[], last: number): number {
    let max = last;

    for(let i = 0; i <= last; i++) {
        if(nums[i] > nums[max])
            max = i
    }

    return max;
}

function swap(idx: number, jdx: number, arr:number[]) {
    const tmp: number = arr[idx];
    arr[idx] = arr[jdx];
    arr[jdx] = tmp;
}
