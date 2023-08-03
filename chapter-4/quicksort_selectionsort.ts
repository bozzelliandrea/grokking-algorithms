/*
Utility function for swap two element by index inside the given array
*/
function swap(arr: number[], a: number, b: number): void {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}


/*
Selection sort algorithm

Time Complexity: O(n^2)
Space Complexity: O(1)
*/
function selection_sort(arr: number[]): void {

    /*
    Find the smallest value inside the array.

    @return index of the smallest value
    */
    function findSmallest(low: number): number {
        let smallest_value: number = arr[low];
        let smallest_idx: number = low;

        for(let i = low; i < arr.length; i++) {
            if(arr[i] < smallest_value) {
                smallest_value = arr[i];
                smallest_idx = i;
            }
        }

        return smallest_idx
    }

    for(let i = 0; i < arr.length; i++) {
        swap(arr, i, findSmallest(i));
    }
}

/*
Selection sort algorithm

Time Complexity: O(n*log(n))
Space Compexity: O(1) recursive stack made by partition split
*/
function quick_sort(arr: number[], low: number, high: number): void {

    function partition(arr: number[], low: number, high: number): number {

        const pivot = arr[high];
        let i = low;

        for(let j = low; j <= high; j++) {

            if(arr[j] < pivot) {
                swap(arr, i, j);
                i++;
            }
        }

        swap(arr, i, high);
        return i;
    }

    if(low < high) {

        const p = partition(arr, low, high);

        quick_sort(arr, low, p - 1);
        quick_sort(arr, p + 1, high);
    }
}


const arr: number[] = [3,2,1,6,4,0,10,9];
quick_sort(arr, 0, arr.length - 1);
console.log(arr);

const arr_two: number[] = [3,2,1,6,4,0,10,9,20,11,21,12,19]; 
selection_sort(arr_two);
console.log(arr_two);
