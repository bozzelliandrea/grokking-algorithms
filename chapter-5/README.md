# Chapter 5 - Hash Tables

## Hash Functions

A hash function is a function where you put in a string1 and you get back a number, it need to be:

-  Consistent: every time you put the same word like "apple" needs to return the same value, without this, the hash table won't work.
-  It should map different words to different numbers

### Exercises: Question and Answer

#### 5.1/4
Q: Which of these hash functions are consistent?

A: 
- f(x) = 1 => Returns “1” for all input => Consistent => return every time for every input the same value
- f(x) = rand() => Returns a random number every time => Not Consistent
- f(x) = next_empty_slot() => Returns the index of the next empty slot in the hash table => Not Consistent
- f(x) = len(x) => Uses the length of the string as the index => Consistent => return every time for the same input with same string length the number.

#### Recap
To recap, hashes are good for
- Modeling relationships from one thing to another thing
- Filtering out duplicates
- Caching/memorizing data instead of making your server do work

### Collision
When two keys have been assigned to the same slot, one of the simplest solution to avoid that, is to start a linkedlist at that slot.

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/1e900525-8d63-44ab-926b-acb4b192aa28)

but this is not perfomant, because all the hashtable is empty exept for the A slot (If those linked lists get long, it slows down your hash table a lot)

``
Your hash function is really important. Your hash function mapped
all the keys to a single slot. Ideally, your hash function would map
keys evenly all over the hash.
``

### Perfomance

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/53b067c5-395f-4663-b29b-62d0dd77e0d1)

Look at the average case for hash tables. Hash tables are as fast as arrays
at searching (getting a value at an index). And they’re as fast as linked
lists at inserts and deletes. It’s the best of both worlds! But in the worst
case, hash tables are slow at all of those. So it’s important that you don’t
hit worst-case performance with hash tables. And to do that, you need
to avoid collisions. To avoid collisions, you need
- A low load factor
- A good hash function


##### Load factor

Number of Items / Total Numer of Slots

[null, null, 0, null, 1] => 2/5 load factor

1 Load factor = hash table full
>1 load factor = full hash table with collision and linkedlist inside slot (Not performant O(n) TC)

if the load factor start grow and is more than 0.7, the hash table is not perfomant and you need to resize the table (with a new array of double size)

Resizing is slow but needed for maintain the O(1) average time complexity

##### A good hash function
Rule of thumb:
A **good** hash function distributes values in the **array evenly**, A bad hash function groups values together and produces a lot of collisions.

### Exercises: Question and Answer

Suppose you have these four hash functions that work with strings:
a. Return “1” for all input. <br/>
b. Use the length of the string as the index. <br/>
c. Use the first character of the string as the index. So, all strings
starting with a are hashed together, and so on. <br/>
d. **Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7,e = 11, and so on.**  <br/>
   **For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag”, the index is 3 + 2 + 17 % 10 = 22 % 10 = 2.** <br/>

#### 5.5/7
Q: For each of these examples, which hash functions would provide a good distribution? Assume a hash table size of 10 slots.

A 5.5: A phonebook where the keys are names and values are phone numbers. The names are as follows: Esther, Ben, Bob, and Dan. => Function D (best TC perfomance), also Function C (not performant while searching)

A 5.6:A mapping from battery size to power. The sizes are A, AA, AAA,and AAAA => Function B and D

A 5.7: A mapping from book titles to authors. The titles are Maus, Fun Home, and Watchmen. => Function D and C

#### Recap

Hash tables are a powerful data structure because they’re so fast and
they let you model data in a different way. You might soon find that
you’re using them all the time:

- You can make a hash table by combining a hash function with an array.
- Collisions are bad. You need a hash function that minimizes collisions.
- Hash tables have really fast search, insert, and delete.
- Hash tables are good for modeling relationships from one item to another item.
- Once your load factor is greater than .07, it’s time to resize your hash table.
- Hash tables are used for caching data (for example, with a web server).
- Hash tables are great for catching duplicates.
