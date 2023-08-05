//Given the head of a singly linked list, reverse the list, and return the reversed list.

import Assert from "./assert";
import LinkedNode from "./linked-node";

function reverseList(head: LinkedNode<number> | null): LinkedNode<number> | null {

    if(head == null)
        return null;

    let cur = head;
    let prev = null;

    while(cur != null) {
        const tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }

    return prev;
};

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            reverseList(
                LinkedNode.fromArray([1,3,4,7,12])
            )
        ),
        [12,7,4,3,1]
    )
)