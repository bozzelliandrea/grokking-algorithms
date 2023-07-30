// https://practice.geeksforgeeks.org/problems/selection-sort/1

//{ Driver Code Starts
import java.util.*;

class GFG
{
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t>0)
		{
			int n = sc.nextInt();
			int arr[] = new int[n]; 
			for(int i=0;i<n;i++)
			{
				arr[i] = sc.nextInt();
			}
		
			Solution obj = new Solution();
			obj.selectionSort(arr, n);
			
			for(int i=0;i<n;i++)
		    	System.out.print(arr[i]+" ");
		    System.out.println();
			t--;
		}
		
	}
}

// } Driver Code Ends


class Solution
{
	int  select(int arr[], int last)
	{
	    int max = last;
        for(int j = 0; j <= last; j++) {
            if(arr[j] > arr[max])
                max = j;
        }
        
        return max;
	}
	
	void selectionSort(int arr[], int n)
	{
        for(int i = 0; i < n - 1; i++) {
          
          int last = n - i - 1;
          int max = select(arr, last);
          
          int tmp = arr[last];
          arr[last] = arr[max];
          arr[max] = tmp;
        } 
	}
}
