import LinkedNode from "./linked-node";

function findOccurenceList<T>(source: LinkedNode<T>, target: T): LinkedNode<number> {
    let list: LinkedNode<number> = new LinkedNode();
    const head = list;
    let index: number = 0;

    while(source != null) {

        if(source.value == target) {
            if(list.value == null)
                list.value = index;
            else {
                list.next = new LinkedNode(index);
                list = list.next;
            }
        }

        source = source.next;
        index++;
    }

    return head;
}
    
function arraysEqual<T>(a: T[], b: T[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function assertionHelper(input: number[], target: number, expected: number[]) {
    const result: number[] = LinkedNode.toArray(
        findOccurenceList(
            LinkedNode.fromArray(input),
            target
        )
    );

    if(arraysEqual(result, expected))
        console.log("Assert success, result expected");
    else
        console.error("Assert Fail! expected: ", expected, " but found: ", result);
}

/*
Given an item and a linked list, return a linked list giving the positions of all occurrences of the
item in the list argument. So if the item is 5 and the list is [2,4,5,8,1,5,3], the result is [2,5].
*/
assertionHelper([1,2,3,4,5,6,7,5], 5, [4, 7]);
assertionHelper([2,4,5,8,1,5,3], 5, [2, 5]);
assertionHelper([2,4,5,8,1,5,3], 100, []);
