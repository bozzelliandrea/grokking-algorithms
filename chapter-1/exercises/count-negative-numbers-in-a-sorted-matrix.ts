//LC https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/editorial/
/*
    TC O(m x log n)
    where M is the size of the grid => grid.length
    and N is the size of row inside the matrix

    SC O(1)
    we allocate constant memory space using only some counter variable
*/
function negativeBinarySearch(arr): number {
    let count: number = 0;
    let lp: number = 0, hp: number = arr.length - 1; 
    let middle: number, value: number;

    while(lp <= hp) {

        middle = Math.floor((lp + hp) / 2);
        value = arr[middle];

        if(value < 0) {
            count += hp - middle + 1;
            hp = middle - 1;
        }
        else {
            lp = middle + 1;
        }
    }

    return count;
}

function countNegatives(grid: number[][]): number {

    let count: number = 0;

    for(let arr of grid)
        count += negativeBinarySearch(arr);

    return count;
};

/*
Linear Traversal Approach

Algorithm
Initialize variables:
count = 0, to count the total number of negative elements in the matrix.
n = grid[0].size(), to store the number of elements in each row.
currRowNegativeIndex = n - 1, to store the current row's first negative element's index.
For each row of the grid, we decrease currRowNegativeIndex by 1 until we point to the last positive element of the current row. And thus, we know all elements to the right of this pointer will be negative so we add n - (currRowNegativeIndex + 1) to the count.
Return count.
*/
function countNegatives(grid: number[][]): number {
    let count = 0;
    let n = grid[0].length;
    let currRowNegativeIndex = n - 1;

    // Iterate on all rows of the matrix one by one.
    for (let row of grid) {
        // Decrease 'currRowNegativeIndex' so that it points to current row's last positive element.
        while (currRowNegativeIndex >= 0 && row[currRowNegativeIndex] < 0) {
            currRowNegativeIndex--;
        }
        // 'currRowNegativeIndex' points to the last positive element,
        // which means 'n - (currRowNegativeIndex + 1)' is the number of all negative elements.
        count += (n - (currRowNegativeIndex + 1));
    }
    return count;
};
