# Chapter 6 - Breadth-First Search

We use BDF when we need to answer at two types of questions:
- Question type 1: Is there a path from node A to node B?
- Question type 2: What is the shortest path from node A to node B?

Breadth-first search allows you to find the shortest distance between two things (shortest-path problem); to solve a shortest path problem, there are two steps:
- Model the problem as a graph
- Solve it using breadth first search (BFS)

### What is a Graph?
a graph model is a set of connection, each graph is made with nodes and edges (which is the connection between nodes).

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/77d49408-7205-4f68-9b85-724d0ea71c14)

A node can be directly connected to many other nodes. Those nodes are called its neighbors. In this graph, Rama is Alex’s neighbor. Adit isn’t Alex’s neighbor, because they aren’t directly connected. But Adit is Rama’s and Tom’s neighbor.

There are 2 main type of graph:

**Undirected graph**
 An undirected graph is a graph where the edges do not have a specific direction and it is bidirectional in nature it does not have a parent-child relation concept as there is no particular direction.

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/ccfc8ad6-f935-43a4-94b1-a6232ee1d27d)
 
Used algorithms: <br />
Breadth-First Search (BFS) <br />
Depth-First Search (DFS)  <br />

  **Directed graph**
A directed graph is a graph that is unidirectional in this the edges have a specific direction and the edges have directions specified with them also a directed graph can contain cycles.

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/df493df9-be5e-4acc-8c77-451caf49d206)

Used algorithms: <br />
Topological Sort <br />
Dijkstra’s Algorithm <br />


#### Implementing the Graph

each node is connected to neighboring nodes. How do you express a relationship like “you -> bob”? Hash table!

```python
graph = {};
graph[“you”] = [“alice”, “bob”, “claire”]
graph[“bob”] = [“anuj”, “peggy”]
graph[“alice”] = [“peggy”]
graph[“claire”] = [“thom”, “jonny”]
graph[“anuj”] = []
graph[“peggy”] = []
graph[“thom”] = []
graph[“jonny”] = []
```

Anuj, Peggy, Thom, and Jonny don’t have any neighbors. They have arrows pointing to them, but no arrows from them to someone else. <br/>
This is called a directed graph—the relationship is only one way. So Anuj is Bob’s neighbor, but Bob isn’t Anuj’s neighbor. <br />
An undirected graph doesn’t have any arrows, and both nodes are each other’s neighbors. For example, both of these graphs are equal.

#### Implementing the Algorithm

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/8b148411-c5a2-4941-9385-fe3b4909e3ea)

Queue tips:
enqueue => push
dequeue => pop

```
search_queue = new Queue()                // Create a new queue
search_queue.enqueue(graph["you"])        // Adds all of your neighbors to the search queue
searched = []                             // This array is how you keep track of which people you’ve searched before

while(!search_queue.isEmpty())            // While until is empty
  person = search_queue.dequeue()         // Grab the first off the queue
  if not in searched(person)              // Only search this person if you haven’t already searched them.
    if check_function(person)
      return true
    else {
      search_queue.enqueue(graph[person])   // Add all the neighbors to the queue
      searched.push(person)                 // Marks this person as searched
   }

return false
```

![image](https://github.com/bozzelliandrea/grokking-algorithms/assets/74464364/9637d18a-2149-439f-b1c6-cb5741033bba)

#### Running Time

If you search your entire graph, that means you'll follow each edge, so the TC is O(number of edges)
You also keep a queue of every node, add to queue is constant O(1) but doing this for every one take O(number of nodes)

BFS total time cost is O(number of nodes + numbers of edges) => **O(V+E)** where V is number of vertices and E number of edges


