// TC: O(n) / SC: O(1), using fast and slow pointers
function deleteMiddle(head: ListNode | null): ListNode | null {

    if(head == null || (head != null && head.next == null))
        return null;

    let fast: ListNode = head;
    let slow: ListNode = head;
    let prev: ListNode = undefined;

    while(fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = prev.next.next;

    return head;
};
