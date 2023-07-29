### Exercises: Question and Answer

#### 1.1 
Q: Suppose you have a sorted list of 128 names, and you’re searching
through it using binary search. What’s the maximum number of
steps it would take?

A: binary search takes O(log n), so it's O(log 128) => log2(128) = 7

log calculation steps: 128/2 = 64/2 = 32/2 = 16/2 = 8/2 = 4/2 = 2/2 = 1

#### 1.2
Q: Suppose you double the size of the list. What’s the maximum
number of steps now?

A: 8

256/2 = 128 and 1.1 answer

#### 1.3

Q: You have a name, and you want to find the person’s phone number
in the phone book.

A: There are two possible approaches:
  - Linear Search, check every number from start to finish the phone book, O(n) time complexity, and this is inefficient for this kind of problem
  - Binary Search, split the phone book in two half book and check where we can find the name by alphabetical order, then split again until you find.
    this is O(log n) time complexity and is more efficient

  the better solution is binary search with O(log n) time complexity, btw both solutions use O(1) space complexity.

#### 1.4

Q: You have a phone number, and you want to find the person’s name
in the phone book. (Hint: You’ll have to search through the whole
book!)

A: the Question specifies to search throughout the book, so linear search, O(n)

#### 1.5

Q: You want to read the numbers of every person in the phone book.

A: Use linear search, O(n) time complx, O(1) space complx

#### 1.6

Q: You want to read the numbers of just the As. (This is a tricky one!
It involves concepts that are covered more in chapter 4. Read the
answer—you may be surprised!)

A: Still O(n), because we dont know how many A surname in the phone book we have, so we need to use linear search until we find the first B.

  let's take all the alphabet letters, 26, so it could be O(n/26) but big O ignore any constant operations, so O(n).

