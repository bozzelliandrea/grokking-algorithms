import LinkedNode from "./linked-node";

// TC: O(n + m) where n is the size of linked list A and m is the size of linked list b
// SC: O(n + m) high memory approach because it create a new linked list of total size n+m
function heavyJoin<T>(a: LinkedNode<T>, b: LinkedNode<T>): LinkedNode<T> {
    let result: LinkedNode<T> = new LinkedNode();
    const head = result;

    while(a != null) {

        if(result.value == null) 
            result.value = a.value;
        else {
            result.next = new LinkedNode(a.value);
            result = result.next;
        }
    
        a = a.next;
    }

    while(b != null) {
        if(result.value == null) 
            result.value = b.value;
        else {
            result.next = new LinkedNode(b.value);
            result = result.next;
        }
        
        b = b.next;
    }

    return head;
}

// TC: O(n + m) where n is the size of linked list A and m is the size of linked list b
// SC: O(1) constant space, store only the head pointer
function join<T>(a: LinkedNode<T>, b: LinkedNode<T>): LinkedNode<T> {
    const head = a;

    while(a.next != null) 
        a = a.next;

    while(b != null){
        a.next = b;
        a = a.next;
        b = b.next
    }

    return head;
}
/*
Given two linked lists, join them together to give one. So if the lists are [1,3,7,4] and
[2,4,5,8,1], the result is [1,3,7,4,2,4,5,8,1].
*/
console.log(
    LinkedNode.toArray(
        join(
            LinkedNode.fromArray([1,3,7,4]),
            LinkedNode.fromArray([2,4,5,8,1])
        )
    )
);
