import Assert from "../assert";
import LinkedNode from "../linked-node";
/*
Count the number of times a particular item occurs in a linked list. So if the item is 7 and the list
is [1,3,7,4,3,7,2], the result is 2

@param input linked list
@param target to count

@return number of total target found inside the linkedlist
*/

export function five(){
    function countTargetInList<T>(head: LinkedNode<T>, target: T): number {

        let count = 0;

        while(head != null) {
            if(head.value == target)
                count++;

            head = head.next;
        }

        return count;
    }

    Assert.assertEquals(
        countTargetInList(LinkedNode.fromArray([9,1,2,3,4,4,4,4]), 4), 
        4
    )

    Assert.assertThrowsError(
        Assert.AssertionError,
        () => Assert.assertEquals(
                countTargetInList(LinkedNode.fromArray([9,1,2,3,4,4,4,4]), 5), 
                4
        )
    );

    Assert.assertEquals(
        countTargetInList(LinkedNode.fromArray([9,1,2,3,4,2,1,4,3,1]), 1), 
        3
    )
}