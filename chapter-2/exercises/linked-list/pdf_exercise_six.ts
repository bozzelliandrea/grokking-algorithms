class LinkedNode<T> {

    value: T;
    next: LinkedNode<T> | null;

    constructor(value: T, next?: LinkedNode<T>) {
        this.value = value;
        this.next = next ?? null;
    }

    public static fromArray<T>(source: T[]): LinkedNode<T> {
        let tmp: LinkedNode<T> = new LinkedNode(null);
        let head = tmp;

        for(let i = 0; i < source.length; i++) {
            if(tmp.value == null) {
                tmp.value = source[i]
            } else {
                tmp.next = new LinkedNode(source[i])
                tmp = tmp.next;
            }
        }

        return head;
    }

    public static findFirstOccurence<T>(source: LinkedNode<T>, target: T): number {
        let index = 0

        while(source != null) {

            if(source.value == target)
                return index;

            source = source.next;
            index++;
        }

        return -1;
    }
    
}

/*
Given an item and a linked list, return the position of the first occurrence of the item in the
linked list, or -1 if it does not occur. So if the item is 5 and the list is [2,4,5,8,1,5,3], the
result is 2 (using the Java convention that positions start at 0).
*/
console.log("Target found at index: ",
    LinkedNode.findFirstOccurence(
        LinkedNode.fromArray([1,2,3,4,5,6,7,5]),
        5
    )
);

console.log("With non-existent should return: ",
    LinkedNode.findFirstOccurence(
        LinkedNode.fromArray([1,2,3,4,5,6,7,5]),
        23
    )
);
