# Chapter 6 - Breadth-First Search

Breadth-first search allows you to find the shortest distance between two things (shortest-path problem); to solve a shortest path problem, there are two steps:
- Model the problem as a graph
- Solve it using breadth first search (BFS)

#### What is a Graph?
a graph model is a set of connection, each graph is made with nodes and edges (which is the connection between nodes).

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/77d49408-7205-4f68-9b85-724d0ea71c14)

A node can be directly connected to many other nodes. Those nodes are called its neighbors. In this graph, Rama is Alex’s neighbor. Adit isn’t Alex’s neighbor, because they aren’t directly connected. But Adit is Rama’s and Tom’s neighbor.

There are 2 main type of graph:

**Undirected graph**
 An undirected graph is a graph where the edges do not have a specific direction and it is bidirectional in nature it does not have a parent-child relation concept as there is no particular direction.

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/ccfc8ad6-f935-43a4-94b1-a6232ee1d27d)

Used algorithms:
Breadth-First Search (BFS) 
Depth-First Search (DFS) 

  **Directed graph**
A directed graph is a graph that is unidirectional in this the edges have a specific direction and the edges have directions specified with them also a directed graph can contain cycles.

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/df493df9-be5e-4acc-8c77-451caf49d206)

Used algorithms:
Topological Sort
Dijkstra’s Algorithm
