import Assert from "../assert";
import LinkedNode from "../linked-node";

export function fourteen(){
/*
Merge two ascending sorted linked lists of numbers, including in the final list only those numbers that occur in both lists.
So if the lists are 
[1,3,4,7,12] 
and 
[1,5,7,9]

The result is [1,7].

considering lla.length as n and llb.length as m

TC: O(n + m) 
SC: O(1), we don't create new node for every value, but we create just a new node to point to the next already in memory nodes
*/
function main(lla: LinkedNode<number>, llb: LinkedNode<number>): LinkedNode<number> {

    if(!lla || !llb)
        return new LinkedNode();

    let starter: LinkedNode<number> = new LinkedNode();
    let head = starter;

    while(lla != null && llb != null) {

        if(lla.value === llb.value) {
            starter.next = lla;
            starter = starter.next;
            lla = lla.next;
            continue;
        }

        if(lla.value < llb.value)
            lla = lla.next;
        else
            llb = llb.next;
    }
    // break linkedlist the after exit from the loop to avoid remaining nodes
    starter.next = null;
    return head.next;
}

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,3,4,7,12]),
                LinkedNode.fromArray([1,5,7,9]),
            )
        ),
        [1,7]
    )
)

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,3,4,7,12]),
                LinkedNode.fromArray([3,5,7,9]),
            )
        ),
        [3,7]
    )
)


Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([]),
                LinkedNode.fromArray([3,5,7,9]),
            )
        ),
        []
    )
)

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,3,4,7,12]),
                LinkedNode.fromArray([23,25,29]),
            )
        ),
        []
    )
)
}
