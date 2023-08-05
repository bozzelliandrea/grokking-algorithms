import LinkedNode from "../linked-node";

export function six(){
    /*
    Given an item and a linked list, return the position of the first occurrence of the item in the
    linked list, or -1 if it does not occur. So if the item is 5 and the list is [2,4,5,8,1,5,3], the
    result is 2 (using the Java convention that positions start at 0).
    */
    console.log("Target found at index: ",
        LinkedNode.findFirst(
            LinkedNode.fromArray([1,2,3,4,5,6,7,5]),
            5
        )
    );

    console.log("With non-existent should return: ",
        LinkedNode.findFirst(
            LinkedNode.fromArray([1,2,3,4,5,6,7,5]),
            23
        )
    );
}