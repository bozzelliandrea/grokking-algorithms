import LinkedNode from "../linked-node";
import Assert from "../assert";

export function ten(){
    /*
    Given a linked list and two items, insert the second item after every occurrence of the first item
    in the list. 
    So if the list is [2,4,3,2,8,2,5,1,2] and the items are 2 and 10, 
    the result is [2,10,4,3,2,10,8,2,10,5,1,2,10].
    */
    function main(ll: LinkedNode<number>, occ: number, n: number): LinkedNode<number> {

        const head = ll;

        while(ll != null) {
            // store the pointer to the next node, and then create a new node with the N value,
            // which point to previous next, this also help to avoid infinite loop
            if(ll.value == occ) {
                const node = ll.next;
                ll.next = new LinkedNode(n, node);
                ll = ll.next;
            }

            ll = ll.next;
        }

        return head;
    }

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(LinkedNode.fromArray([2,4,3,2,8,2,5,1,2]), 2, 10)
            ),
            [2,10,4,3,2,10,8,2,10,5,1,2,10]
        )
    )

    // assert with the same number as the occurrence, check avoiding the infinite loop
    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(LinkedNode.fromArray([2,4,3,2,8,2,5,1,2]), 2, 2)
            ),
            [2, 2, 4, 3, 2, 2, 8, 2, 2, 5, 1, 2, 2]
        )
    )
}