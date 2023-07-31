// pseudocode to analyze quicksort in place call stack

[2, 0 ,4, 1]

quicksort(arr, 0, arr - 1) => arr, 0, 3

// start call stack
//----------//
partition(arr, 0, 3)
low = 0
high = 3


pivot 1
i = -1
for j = 0; j <= 3; j++

	if arr[j] = 2 < 1 // false
	if arr[j] = 0 < 1 // true
		i++ = 0
		swap {
			tmp = arr[i]
			arr[i] = arr[j]
			arr[j] = tmp
			// arr[i] = 0; arr[j] = 2
			// current arr = [0,2,4,1]
		}
	if arr[j] = 4 < 1 //false

//exit loop, 
swap(arr, i + 1, high) (pivot index) // we know every time we end the loop, the i + 1 is alway greater or equals than pivot
// i = 1
// current arr [0,1,4,2]; return 1

// return to quicksort stack
pi = 1
quicksort(arr, low = 0; high = pi - 1 = 0) // skipped because low < high is false
quicksort(arr, low = pi + 1 = 2; high = 3) 

//--------//
low = 2
high = 3
pivot = 2
i = 1

for j = 1; 1 <= 1
	arr[j] = 1 < 2 // true
		swap(arr, i, j) => swap(arr, 1, 1)
		// current arr [0, 1, 4, 2]
	
swap(arr, i + 1, high) => swap(arr, 2, 30
//current arr [0, 1, 2, 4]
return 2;

pi = 2

quicksort(arr, low = 2, pi - 1 = 2) // skipped low == high
quicksort(arr, pi + 1 = 3, high = 3) //skipped low == high

ended call stack;
