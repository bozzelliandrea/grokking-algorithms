function binarySearch(arr: number[]): [number, number] {

    // Edge case with full array of zeros
    if (arr[0] == 0 && arr[arr.length - 1] == 0)
        return [0,0]

    let lp = 0, hp = arr.length - 1;
    let mp, mv;
    let zeros = 0;

    while(lp <= hp) {
        mp = Math.floor((lp + hp) / 2);
        mv = arr[mp];

        if(mv > 0) {
            hp = mp - 1;
        } else if (mv < 0) {
            lp = mp + 1;
        } else {
            zeros++;
            lp = mp + 1;
        }
    }

    return [arr.length - lp, lp - zeros];
}


function maximumCount(nums: number[]): number {
    const values: [number, number] = binarySearch(nums);
    return Math.max(values[0], values[1]);
};

/*
TC: O(log n)
SC: 0(1) we return an array but use constant size of 2
*/
