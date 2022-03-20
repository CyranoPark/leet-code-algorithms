/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    
    let result = false;
    const visited = new Set();
    const memo = edges.reduce((acc, edge) => {
        const [a, b] = edge;
        if (!acc[a]) {
            acc[a] = new Set();
        }
        
        if (!acc[b]) {
            acc[b] = new Set();
        }
        
        acc[a].add(b);
        acc[b].add(a);
        
        return acc;
    }, {});
    
    
    function fn(vertex, cicle) {
        if (vertex === destination) {
            result = true;
        }
        
        if (result || cicle > n) return;
        
        for (let item of memo[vertex]) {
            if (!visited.has(item)) {
                visited.add(item);
                fn(item, cicle + 1);
            }
        }
    }
    
    
    
    fn(source, 0);
    
    return result;
    
};