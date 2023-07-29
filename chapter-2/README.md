# Chapter 2 - Selection Sort

## Arrays and Linked List


| Arrays    |      Arrays    | Lists |
|-----------|:-------------:|:------:|
| Reading   |  O(1)         | O(N)   |
| Insertion |    O(N)       | O(1)   |

* if we don't save the linked list tail, insert/remove at the end of a linked list would be O(n)
* insert/remove from the middle of array and a linked list would be the same, O(n)


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
