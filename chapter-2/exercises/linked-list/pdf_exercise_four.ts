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
Remove the last target occurence from an input linkedlist 

Using pointers, loop through the whole list and keep track of the node prior to the node containing the last occurrence key using a special pointer. 
After this just store the next of next of the special pointer, 
into to next of special pointer to remove the required node from the linked list.

@param input linked list
@param target to be removed

@return position of the removed element
*/
function deleteLastOccurence<T>(head: LinkedNode<T>, target: T): number {

    let nodeBeforeTarget: LinkedNode<T> | undefined = undefined;
    let index = 0;
    let targetIndex = -1;

    while(head.next != null) {
        if(head.next && head.next.value == target) {
            nodeBeforeTarget = head;
            targetIndex = index + 1;
        }

        head = head.next;
        index++;
    }

    if(nodeBeforeTarget) {
        nodeBeforeTarget.next = nodeBeforeTarget.next!.next ? nodeBeforeTarget.next!.next : null
    }    

    return targetIndex;
}


function assertLastOccurence<T>(source: T[], target: T): void {

    const linkedlist = LinkedNode.fromArray(source);
    const index =  deleteLastOccurence(linkedlist, target);

    if(index == -1 && source.lastIndexOf(target) == -1)
        console.log("Target not found");
    else
        if(source.lastIndexOf(target) == index) 
            console.log("Last occurence removed successfully at index: ", index);
        else 
            console.error("Last occurence are different");


    console.log("Linked List Result", LinkedNode.toArray(linkedlist));
}


assertLastOccurence([9,1,2,3,4,4,4,4], 4);

assertLastOccurence([9,1,2,3,4,4,4,4], 23);

assertLastOccurence([9,1,2,3,4,4,3,3], 3);
