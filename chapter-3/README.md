# Chapter 3 - Recursion


### Exercises: Question and Answer

#### 3.1
Q: Suppose I show you a call stack like this.

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/2edd0108-7bee-4ea1-9e44-fd045510ab34)


What information can you give me, just based on this call stack?
Now let’s see the call stack in action with a recursive function.

A: Greet function has been called with name parameter evaluated as "maggie" and then call greet2 function with "maggie" as parameter 

- The greet function is called first, with name = maggie.
- Then the greet function calls the greet2 function, with name = maggie
- At this point, the greet function is in an incomplete,
suspended state.
- The current function call is the greet2 function.
- After this function call completes, the greet function will
resume.

#### 3.2
Q: Suppose you accidentally write a recursive function that runs
forever. As you saw, your computer allocates memory on the
stack for each function call. What happens to the stack when your
recursive function runs forever?

A: The stack grows forever. Each program has a limited
amount of space on the call stack. When your program runs
out of space (which it eventually will), it will exit with a stack-
overflow error.

Recap
- Recursion is when a function calls itself.
- Every recursive function has two cases: the base case and the recursive case.
- A stack has two operations: push and pop.
- All function calls go onto the call stack.
- The call stack can get very large, which takes up a lot of memory.
