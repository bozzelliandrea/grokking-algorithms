/* we have a sorted ascending array, and we need to find a target

possible solutions?
- linear search, with O(n) time complexity
- binary search, with O(log n) time complexity

// but O(log n) algo is required 

// solution?

use a binary search, using 2 pointer, a low index = 0 and a high index = array.size - 1
iterate with a while loop until the low index is greater than to the high one

    create a middle index, which is (low + high) / 2
    check if array[middle] is target
        if yes then return value
        if middle is more then lower; set lower index to middle index + 1
        if middle is less then lower; set high index to middle index - 1

return -1 if we end loop without returing value

// space complexity is O(1) since we dont use any complex data structure or recursive call stack
*/
function search(nums: number[], target: number): number {

    // constraint is array length at least > 1, but we still check edge cases
    if(nums == null || nums.length == 0)
        return -1;

    // skip iteration if the array size is 1
    if(nums.length == 1)
        if(nums[0] == target) return 0;
        else return -1;

    let lower = 0;
    let high = nums.length - 1;
    let middle, value;

    while(lower <= high) {
        middle = Math.floor((lower + high) / 2);
        value = nums[middle];

        console.log("Value" + value);
        console.log("Lower" + lower);

        if(value == target)
            return middle;
        if(value < target)
            lower = middle + 1;
        else
            high = middle - 1;
    }

    return -1;
};
