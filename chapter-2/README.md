# Chapter 2 - Selection Sort

## Arrays and Linked List


| Arrays    |      Arrays    | Lists |
|-----------|:-------------:|:------:|
| Reading   |  O(1)         | O(N)   |
| Insertion |    O(N)       | O(1)   |
| Deletion |    O(N)       | O(1)   |

* if we don't save the linked list tail, insert/remove at the end of a linked list would be O(n)
* insert/remove from the middle of array and a linked list would be the same, O(n)


#### Linked List
implementation in Java

```java
class LinkedList {
  // Creating a node
  Node head;

  static class Node {
    int value;
    Node next;

    Node(int d) {
      value = d;
      next = null;
    }
  }

  public static void main(String[] args) {
    LinkedList linkedList = new LinkedList();

    // Assign value values
    linkedList.head = new Node(1);
    Node second = new Node(2);
    Node third = new Node(3);

    // Connect nodess
    linkedList.head.next = second;
    second.next = third;

    // printing node-value
    while (linkedList.head != null) {
      System.out.print(linkedList.head.value + " ");
      linkedList.head = linkedList.head.next;
    }
  }
}
```


### Exercises: Question and Answer

#### 2.1
Q: Suppose you’re building an app to keep track of your finances. <br/>

1. Groceries
2. Movie
3. Membership

Every day, you write down everything you spent money on. At the
end of the month, you review your expenses and sum up how much
you spent. So, you have lots of inserts and a few reads. Should you
use an array or a list?

A: we review all the expenses one time at month (at the end of current month), but we can add every day everything we spend, so...
  only 1 read operation and we need to read fron start to finish 
  multiple insert operation, we need to sum every operation so the order is not important and we can add at the end every time.

  the best solution is a LinkedList with O(1) TC if we save our tail inside the data structure and for reading the time complexity would be O(n) 

## Selection Sort
