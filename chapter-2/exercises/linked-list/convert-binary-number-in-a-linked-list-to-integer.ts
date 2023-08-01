// Easy problem - base about scroll through a list
// Convert the given linkedlist with binary number (0 and 1) to a decimal number
// input example: [1,0,1] | output expected: 5

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
*/
 
// Optimal solution
// TC: O(n) where n is the size of the linked list
// SC: O(1) constant space, we store a single value (integer)
function getDecimalValue(head: ListNode | null): number {
    let count = 0;

    while (head) {
        count += head.val;
        count *= 2;
        head = head.next;
    }

    return count / 2;
};

// TC: O(n)  
// SC: O(n) because we store "num" string variable, and string size is N which is linked list size
function getDecimalValueIteration(head: ListNode | null): number {

    if(head == null)
        return 0;

    let num: string = "";

    while(head != null) {
        num = num + head.val;
        head = head.next;
    }

    return parseInt(num, 2);
};

// TC: O(n) 
// SC: O(n) recursion store in memory for each step inside call stack che value of head.val in the step
function getDecimalValueRecursive(head: ListNode | null): number {

    function recursiveSum(head: ListNode | null): string {
        if(head == null)
            return "";
    
        return head.val + recursiveSum(head.next);
    }

    return parseInt(recursiveSum(head), 2); 
};

