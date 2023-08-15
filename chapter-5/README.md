# Chapter 5 - Hash Tables

## Hash Functions

A hash function is a function where you put in a string1 and you get back a number, it need to be:

-  Consistent: every time you put the same word like "apple" needs to return the same value, without this, the hash table won't work.
-  It should map different words to different numbers

### Exercises: Question and Answer

#### 5.1/4
Q: Which of these hash functions are consistent?

A: 
- f(x) = 1 => Returns “1” for all input => Not Consistent
- f(x) = rand() => Returns a random number every time => Not Consistent
- f(x) = next_empty_slot() => Returns the index of the next empty slot in the hash table => Not Consistent
- f(x) = len(x) => Uses the length of the string as the index => Not Consistent

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

