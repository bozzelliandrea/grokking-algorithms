//{ Driver Code Starts
import java.util.*;
class Sorting
{
	static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        System.out.println();
    }
    
    // Driver program
    public static void main(String args[])
    {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T>0)
		{
			int n = sc.nextInt();
			int arr[] = new int[n];
			for(int i=0;i<n;i++)
				arr[i] = sc.nextInt();

			
			new Solution().quickSort(arr,0,n-1);
			printArray(arr);
		    T--;
		}
} }
// } Driver Code Ends


class Solution
{
    //Function to sort an array using quick sort algorithm.
    static void quickSort(int arr[], int low, int high) {
        if(low < high) {
            // partition index
            int partition = partition(arr, low, high);

            // divide and conquer strategy, [lower] <partition> [greater]
            // from low to partition - 1, lower array
            quickSort(arr, low, partition - 1);
            // from partition + 1 to high, upper array
            quickSort(arr, partition + 1, high);
        }
    }
    
    static int partition(int arr[], int low, int high) {
        // last element pivot strategy
        int pivot = arr[high];
        // initialize i outbound of the window
        int i = low - 1;

        // start j from low to high for stay inside the window
        for(int j = low; j <= high; j++) {

            // if lower then pivot, increment i to first window index (low) and swap
            if(arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        // swap the pivot index with the i + 1, we know values until i are lower than pivot, so i + 1 is greater or equals than pivot
        swap(arr, i + 1, high);
        // return the partition index use to divide the new two arrays 
        return i + 1;
    }

    /*
    Alternative partition, without "negative index i" setup, just initialize i equals to low and increment only after swap 
    
    static int partition(int arr[], int low, int high)
    {
     
        int pivot = arr[high];
        int i = low;
        
        for(int j = low; j <= high; j++) {
            
            if(arr[j] < pivot) {
                swap(arr, i, j);
                i++;
            }
        }
        
        
        swap(arr, i, high);
        return i;
    }
    */
    
    static void swap(int arr[],int i,int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
