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

 TC: O(n)
 SC: O(1)
 */

function findMiddle(head: ListNode): ListNode {

    let slow: ListNode = head;
    let fast: ListNode = head;

    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function reverse(head: ListNode): ListNode {
    let curr = head;
    let prev = null;

    while(curr != null) {
        const tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }

    return prev;
}

function isPalindrome(head: ListNode | null): boolean {

    // [] or [1]
    if(head == null || (head != null && head.next == null))
        return true;


    let middle = findMiddle(head);
    middle = reverse(middle);

    while(middle != null && head != null) {
        if(middle.val != head.val)
            return false;

        middle = middle.next;
        head = head.next;
    }

    return true;
};

