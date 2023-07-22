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
    TC O(m x log n)
    where M is the size of the grid => grid.length
    and N is the size of row inside the matrix

    SC O(1)
    we allocate constant memory space using only some counter variable
*/
