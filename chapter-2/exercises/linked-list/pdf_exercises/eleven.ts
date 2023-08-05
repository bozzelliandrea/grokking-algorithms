import Assert from "../assert";
import LinkedNode from "../linked-node";
/*
Test whether a linked list of numbers is in ascending numerical order, for example
[1,5,9,12] is, but [1,5,12,9] is not.

TC: O(n)
SC: O(1)
*/
export function eleven() {
    function main(ll: LinkedNode<number>): boolean {

        let prev = -Infinity;
    
        while(ll != null) {
    
            if(ll.value < prev)
                return false;
    
            prev = ll.value;
            ll = ll.next;
        }
    
        return true;
    }
    
    Assert.assertTrue(
        main(
            LinkedNode.fromArray([1,5,9,12])
        )
    );
    
    Assert.assertFalse(
        main(
            LinkedNode.fromArray([1,5,12,9])
        )
    );
}
