class LinkedNode<T> {

    value: T;
    next: LinkedNode<T> | null;

    constructor(value?: T, next?: LinkedNode<T>) {
        this.value = value ?? null;
        this.next = next ?? null;
    }

    public static fromArray<T>(source: T[]): LinkedNode<T> {
        let tmp: LinkedNode<T> = new LinkedNode(null);
        let head = tmp;

        for(let i = 0; i < source.length; i++) {
            if(tmp.value == null) {
                tmp.value = source[i]
            } else {
                tmp.next = new LinkedNode(source[i])
                tmp = tmp.next;
            }
        }

        return head;
    }

    public static toArray<T>(source: LinkedNode<T>): T[] {
        const array: T[] = [];

        while(source != null && source.value != null) {
            array.push(source.value);

            source = source.next;
        }

        return array;
    }

    public static findOccurenceList<T>(source: LinkedNode<T>, target: T): LinkedNode<number> {
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
        LinkedNode.findOccurenceList(
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
