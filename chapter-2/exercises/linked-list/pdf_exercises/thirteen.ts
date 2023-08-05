import Assert from "../assert";
import LinkedNode from "../linked-node";

export function thirteen(){
/*
Merge two linked lists of numbers, 
but if a number occurs in both lists, only include it once in the final list.

So if the lists are 
[1,3,4,7,12] 
and 
[1,5,7,9]

The result is [1,3,4,5,7,9,12].
*/

function main(lla: LinkedNode<number>, llb: LinkedNode<number>): LinkedNode<number> {

    if(!lla || !llb)
        return lla ?? llb;

    if(lla.value == null)
        return llb;
    if(llb.value == null)
        return lla;

    let starter: LinkedNode<number> = undefined;

    if(lla.value < llb.value) {
        starter = lla;
        lla = lla.next;
    } else {
        starter = llb;
        llb = llb.next;
    }

    let prev: number =  starter.value;
    const head = starter;

    while(lla != null || llb != null) {
        if(starter.next && starter.value == starter.next.value) {
            starter.next = starter.next.next;
            continue;
        }

        if(lla != null && prev == lla.value) {
            lla = lla.next;
            continue;
        }
        
        if(llb != null && prev == llb.value) {
            llb = llb.next;
            continue;
        }

        if((lla ? lla.value : Infinity) < (llb ? llb.value : Infinity)) {
            starter.next = lla;
            lla = lla.next;
        } else {
            starter.next = llb;
            llb = llb.next;
        }
        starter = starter.next;
        prev = starter.value;
    }

    return head;
}

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,3,4,7,12]),
                LinkedNode.fromArray([1,5,7,9]),
            )
        ),
        [1,3,4,5,7,9,12]
    )
)

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,3,4,7,12]),
                LinkedNode.fromArray([1,3,7,9]),
            )
        ),
        [1,3,4,7,9,12]
    )
)

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,3,4,7,12,12,12,12]),
                LinkedNode.fromArray([1,3,7,9]),
            )
        ),
        [1,3,4,7,9,12]
    )
)

Assert.assertTrue(
    Assert.arraysEqual(
        LinkedNode.toArray(
            main(
                LinkedNode.fromArray([1,1,1,1,3,4,7,12,12,12,12]),
                LinkedNode.fromArray([1,1,3,7,9]),
            )
        ),
        [1,3,4,7,9,12]
    )
)

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