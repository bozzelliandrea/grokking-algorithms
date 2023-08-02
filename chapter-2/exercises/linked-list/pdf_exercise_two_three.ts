
class LNode<T> {

    value: T;
    next: LNode<T> | null;

    constructor(value: T, node: LNode<T> | null) {
        this.value = value;
        this.next = node;
    }
}

class LinkedList<T> {
    head: LNode<T>;
    tail: LNode<T>;

    constructor()
    constructor(value?: T) {
        this.head = new LNode(value, null);
        this.tail = this.head;
    }

    public add(value: T) {
        if(this.head.value == undefined) {
            this.head = new LNode(value, null);
            this.tail = this.head;
            return;
        }
        this.tail.next = new LNode(value, null);
        this.tail = this.tail.next;
    }

    public static fromArray<T>(source: T[]): LinkedList<T> {
        const linkedlist: LinkedList<T> = new LinkedList();

        for(let i = 0; i < source.length; i++) {
            linkedlist.add(source[i]);
        }

        return linkedlist;
    }
}

// Delete the first occurrence of an item from a linked list. \
// So if the item is 7 and the list is [1,3,7,4,3,7,2], the result is [1,3,4,3,7,2]

/*
Delete the first occurence target inside the linkedlist

@param source of data
@param target to remove

@return linkedlist without the first occurence of rtarget value
*/
function exercise_two<T>(source: T[], target: T): LinkedList<T> {

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
            break;
        }
        head = head.next;
    }

    return linkedlist;
}

function assertLinkedList<T>(l1: LinkedList<T>, l2: LinkedList<T>): void {
    

    while(l1.head != null && l2.head != null) {
        if(l1.head.value != l2.head.value) {
            console.error("ERROR, VALUES ARE DIFFERENT!");
            return;
        }

        l1.head = l1.head.next;
        l2.head = l2.head.next;
    }

    if(l1.head == null && l2.head != null) {
        console.error("LIST 2 SIZE IS GREATER THAN LIST 1");
        return;
    }

    if(l2.head == null && l1.head != null) {
        console.error("LIST 1 SIZE IS GREATER THAN LIST 2");
        return;
    }

    console.log("LISTS VALUES ARE EQUALS!");
}

assertLinkedList(exercise_two([1,2,3,4,1], 1), LinkedList.fromArray([2,3,4,1]));
assertLinkedList(exercise_two([1,2,3,4,5,6,4,5,4], 4), LinkedList.fromArray([1,2,3,5,6,4,5,4]));
assertLinkedList(exercise_two([1,2,3,4,5,6,4,5,4], 4), LinkedList.fromArray([1,2,3,4,5,6,4,5,4]));
