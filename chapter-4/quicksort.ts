
function partition(arr: number[], low: number, high: number): number {

    const pivot = arr[high];
    let i = low;

    for(let j = low; j <= high; j++) {

        if(arr[j] < pivot) {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
        }
    }

    const tmp = arr[i];
    arr[i] = arr[high];
    arr[high] = tmp;
    return i;
}

function quicksort(arr: number[], low: number, high: number) {

    if(low < high) {

        const p = partition(arr, low, high);

        quicksort(arr, low, p - 1);
        quicksort(arr, p + 1, high);
    }
}



const arr: number[] = [3,2,1,6,4,0,10,9];
quicksort(arr, 0, arr.length - 1);
console.log(arr);
