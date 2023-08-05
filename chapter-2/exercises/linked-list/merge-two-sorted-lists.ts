 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

/*
TC: O(n + m) where n = list1.length and m = list2.length
SC: O(1) no extra space used, store only 2 pointer on the first node "starter" and the head to return.
*/
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    // if one list is null, return the other one
    if(!list1 || !list2)
        return list1 ?? list2;

    let starter: ListNode = null; // pointer to the lowest first node

    // select the starter node with the lowest first value
    if(list1.val < list2.val) {
        starter = list1;
        list1 = list1.next;
    }
    else {
        starter = list2;
        list2 = list2.next;
    }

    const head: ListNode = starter; // pointer to head

    // loop until one list end
    while(list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            starter.next = list1;
            list1 = list1.next;
        } else {
            starter.next = list2;
            list2 = list2.next;
        }

        starter = starter.next;
    }

    // if one list contains more nodes, point the starter.next to the current list node that has all remaining values
    if(list1 != null) 
        starter = starter.next = list1;
    else if(list2 != null) 
        starter = starter.next = list2;

    return head;
};
