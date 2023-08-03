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

    public static toArray<T>(source: LinkedNode<T>) {
        const array: T[] = [];

        while(source != null) {
            array.push(source.value);
            source = source.next;
        }

        return array;
    }
}

/*
Count the number of times a particular item occurs in a linked list. So if the item is 7 and the list
is [1,3,7,4,3,7,2], the result is 2

@param input linked list
@param target to count

@return number of total target found inside the linkedlist
*/
function countTargetInList<T>(head: LinkedNode<T>, target: T): number {

    let count = 0;

    while(head != null) {
        if(head.value == target)
            count++;

        head = head.next;
    }

    return count;
}


function assertLastOccurence<T>(source: T[], target: T, expected: T): void {

    const count = countTargetInList(LinkedNode.fromArray(source), target);

    if(count == expected) 
        console.log("Assert success, total: ", expected)
    else 
        console.error("Assert fail! expected: ", expected, ". found: ", count)

}


assertLastOccurence([9,1,2,3,4,4,4,4], 4, 4);
assertLastOccurence([9,1,2,3,4,4,4,4], 5, 0);
assertLastOccurence([9,1,2,3,4,2,1,4,3,1], 1, 3);
