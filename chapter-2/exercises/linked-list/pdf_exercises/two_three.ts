import LinkedList from "../linked-list";
import Assert from "../assert";

export function two_three(){
// Delete the first occurrence of an item from a linked list. \
// So if the item is 7 and the list is [1,3,7,4,3,7,2], the result is [1,3,4,3,7,2]

/*
Delete the first occurence target inside the linkedlist

@param source of data
@param target to remove

@return linkedlist without the first occurence of rtarget value
*/
function deleteOccurence<T>(source: T[], target: T, first: boolean = false): LinkedList<T> {

    let linkedlist: LinkedList<T> = new LinkedList();

    if(source.length == 0)
        return linkedlist;

    // fulfill the array also with the target, the aim of the exercise is to remove an element from the linked list
    linkedlist = LinkedList.fromArray(source);

    let head = linkedlist.head;

    // check the head value before all the next nodes
    if(head.value == target) {
        linkedlist.head = linkedlist.head.next;
        return linkedlist;
    }

    while(head.next != null) {
        if(head.next.value == target) {
            head.next = head.next.next;
            if(first)
                break;
        }
        else
            head = head.next;
    }

    return linkedlist;
}



Assert.assertLinkedList(deleteOccurence([1,2,3,4,1], 1, true), LinkedList.fromArray([2,3,4,1]));
Assert.assertLinkedList(deleteOccurence([1,2,3,4,5,6,4,5,4], 4, true), LinkedList.fromArray([1,2,3,5,6,4,5,4]));
Assert.assertLinkedList(deleteOccurence([1,2,3,4,5,6,4,5,4], 4, true), LinkedList.fromArray([1,2,3,4,5,6,4,5,4]));

Assert.assertLinkedList(deleteOccurence([1,2,3,4,5,6,4,5,4], 4), LinkedList.fromArray([1,2,3,5,6,5]));
Assert.assertLinkedList(deleteOccurence([1,2,3,2,5,2,2,6,2], 2), LinkedList.fromArray([1,3,5,6]));
}