
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

    constructor(value: T) {
        this.head = new LNode(value, null);
        this.tail = this.head;
    }

    public add(value: T) {
        this.tail.next = new LNode(value, null);
        this.tail = this.tail.next;
    }
}

//Test whether a particular item is in a linked list. So if the item is 4 and the list is [1,4,2,5],
//the method returns true; if the item is 6 and the list is [1,4,2,5], the method returns false.

function exercise_one(target: number): boolean{

    const linkedlist: LinkedList<number> = new LinkedList(1);
    linkedlist.add(2);
    linkedlist.add(3);

    let head: LNode<number> | null = linkedlist.head;

    while(head != null) {
        if(target === head.value) {
            return true;
        }
        head = head.next;
    }

    return false;
}

function assertionHelper(target: number) {
    if(exercise_one(target))
        console.log("TARGET FOUND!");
    else
        console.error("NOT FOUND!!!")
}

assertionHelper(2);
assertionHelper(3);
assertionHelper(5);
assertionHelper(0);
