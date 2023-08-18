/* Find if node is connect in a directed graph

        ---------> A ---> End  
        |          | 
    Start ---> B <--
        |          |
        ---------> C ---> D
*/

function bfs(graph: Map<string, string[]>, from: string, to: string): number {

    if(!graph.has(from) || !graph.has(to))
        return false;
        
    const queue: string[] = [];
    const visited: string[] = [];
    queue.push(...graph.get(from));

    while(queue.length > 0) {
        const node = queue.shift();

        if(node == to)
            return true;
        
        visited.push(node);
        queue.push(...graph.get(node));
    }


    return false;
}


const graph: Map<string, string[]> = new Map();
graph.set("start", ["A", "B", "C"]);
graph.set("A", ["end", "B"]);
graph.set("B", []);
graph.set("C", ["B", "D"]);
graph.set("D", []);
graph.set("end", []);

console.log("Path exists? ", bfs(graph, "start", "end"));
