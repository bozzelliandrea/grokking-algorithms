import LinkedNode from "../linked-node";
import Assert from "../assert";

export function nine(){
    /*
    Given a linked list of numbers and a number, add the number to all the numbers in the list, so if
    the number is 20 and the list is [1,5,12,9,7,16], the result is [21,25,32,29,27,36].
    */
    function main(ll: LinkedNode<number>, n: number): LinkedNode<number> {

        const head = ll;

        while(ll != null) {
            ll.value = ll.value + n;
            ll = ll.next;
        }

        return head;
    }

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(LinkedNode.fromArray([1,5,12,9,7,16]), 20)
            ),
            [21,25,32,29,27,36]
        )
    )

    Assert.assertTrue(
        Assert.arraysEqual(
            LinkedNode.toArray(
                main(LinkedNode.fromArray([1,5,12,9,7,16]), 200)
            ),
            [201,205,212,209,207,216]
        )
    )
}
