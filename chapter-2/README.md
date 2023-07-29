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

#### 2.2
Q: Suppose you’re building an app for restaurants to take customer
orders. Your app needs to store a list of orders. Servers keep adding
orders to this list, and chefs take orders off the list and make them.
It’s an order queue: servers add orders to the back of the queue, and
the chef takes the first order off the queue and cooks it. <br/>

Would you use an array or a linked list to implement this queue?
(Hint: Linked lists are good for inserts/deletes, and arrays are good
for random access. Which one are you going to be doing here?)

A: LinkedList, every new order is saved at the end of the linkedlist (tail) and when the chef pick an order from the queue, remove the current head of the LL and the next pointer becomes the new head.

#### 2.3
Q: Let’s run a thought experiment. Suppose Facebook keeps a list of
usernames. When someone tries to log in to Facebook, a search is
done for their username. If their name is in the list of usernames,
they can log in. People log in to Facebook pretty often, so there are
a lot of searches through this list of usernames. Suppose Facebook
uses binary search to search the list. Binary search needs random
access—you need to be able to get to the middle of the list of
usernames instantly. Knowing this, would you implement the list
as an array or a linked list?

A: if we want to use binary search, we need random access (middle of the data lenght) so we use an Array (sorted)

ps. To get to the middle element in a linked list, you’d have to start at the first element and follow all the links down to the middle element if you already know the size, otherwise, run all the linkedlist and restart to the middle again.

#### 2.4
Q: People sign up for Facebook pretty often, too. Suppose you decided
to use an array to store the list of users. What are the downsides
of an array for inserts? In particular, suppose you’re using binary
search to search for logins. What happens when you add new users
to an array?

A: We can use 2 approaches:
  - find with binary search the index before and after the new element, then insert the element and shift the entire right array (and if we haven't enought space, create a new array and shift all elements inside the new arr)
  - insert at the end of the array and then sort the array to maintain availability for the binary search

Big O worst case => O(n) for array insert + O(n log n) using a quicksort algorithms = O(nlogn)

#### 2.4
Q: In reality, Facebook uses neither an array nor a linked list to store
user information. Let’s consider a hybrid data structure: an array
of linked lists. You have an array with 26 slots. Each slot points to a
linked list. For example, the first slot in the array points to a linked
list containing all the usernames starting with a. The second slot
points to a linked list containing all the usernames starting with b,
and so on.


Suppose Adit B signs up for Facebook, and you want to add them
to the list. You go to slot 1 in the array, go to the linked list for slot
1, and add Adit B at the end. Now, suppose you want to search for
Zakhir H. You go to slot 26, which points to a linked list of all the
Z names. Then you search through that list to find Zakhir H.
Compare this hybrid data structure to arrays and linked lists. Is it
slower or faster than each for searching and inserting? You don’t
have to give Big O run times, just whether the new data structure
would be faster or slower.

A: 
Searching is slower, we can use binary search but only for find the index which rappresent the first letter. <br/>
Tips. you don't need binary search, just use ASCII conversion '<your_char>' - 'a' <br/>
  Example: 'a' - 'a' = 0;  'c' - 'a' = 2

Inserting is faster than arrays, same amount of time as linked lists.

## Selection Sort
