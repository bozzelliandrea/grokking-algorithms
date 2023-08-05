//Test whether a particular item is in a linked list. So if the item is 4 and the list is [1,4,2,5],
//the method returns true; if the item is 6 and the list is [1,4,2,5], the method returns false.

import LinkedList from "../linked-list";
import LinkedNode from "../linked-node";
import Assert from "../assert";

export function one(){
    function exercise_one(target: number): boolean{

        const linkedlist: LinkedList<number> = new LinkedList(1);
        linkedlist.add(2);
        linkedlist.add(3);

        let head: LinkedNode<number> | null = linkedlist.head;

        while(head != null) {
            if(target === head.value) {
                return true;
            }
            head = head.next;
        }

        return false;
    }

    Assert.assertTrue(exercise_one(2))
    Assert.assertFalse(exercise_one(0))
    Assert.assertFalse(exercise_one(5))
    Assert.assertTrue(exercise_one(3))
}