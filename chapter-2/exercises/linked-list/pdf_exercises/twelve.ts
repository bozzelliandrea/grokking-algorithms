import Assert from "../assert";
import LinkedNode from "../linked-node";

export function twelve(){
    /*
    Merge two linked lists of numbers which are in ascending numerical order,
    so if the lists are
    [2,3,4,8,12] 
    and 
    [1,4,5,7,9]

    The result is [1,2,3,4,4,5,7,8,9,12].

    TC: O(n + m)
    SC: O(1)
    */

    function main(lla: LinkedNode<number>, llb: LinkedNode<number>): LinkedNode<number> {

        if(!lla || !llb)
            return lla ?? llb;

        if(lla.value == null)
            return llb;
        if(llb.value == null)
            return lla;

        let start: LinkedNode<number> = null;

        if(lla.value < llb.value) {
            start = lla;
            lla = lla.next;
        } else {
            start = llb;
            llb = llb.next;
        }

        const head = start;

        while(lla != null && llb != null) {
            if(lla.value < llb.value) {
                start = start.next = lla;
                lla = lla.next;
            } else {
                start = start.next = llb;
                llb = llb.next;
            }
        }


        if(lla != null) 
            start.next = lla;
        else if(llb != null)
            start.next = llb

        return head;
    }

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(
                    LinkedNode.fromArray([2,3,4,8,12]),
                    LinkedNode.fromArray([1,4,5,7,9])
                )
            ),
            [1,2,3,4,4,5,7,8,9,12]
        )
    );

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(
                    null,
                    LinkedNode.fromArray([1,4,5,7,9])
                )
            ),
            [1,4,5,7,9]
        )
    );

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(
                    LinkedNode.fromArray([]),
                    LinkedNode.fromArray([1,4,5,7,9])
                )
            ),
            [1,4,5,7,9]
        )
    );

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(
                    LinkedNode.fromArray([1]),
                    LinkedNode.fromArray([])
                )
            ),
            [1]
        )
    );

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(
                    LinkedNode.fromArray([]),
                    LinkedNode.fromArray([])
                )
            ),
            []
        )
    );

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(
                    null,
                    null
                )
            ),
            []
        )
    );
}