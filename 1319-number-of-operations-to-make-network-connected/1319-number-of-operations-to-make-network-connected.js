/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) {
        return -1;
    }
    
    let count = 0;
    const visited = new Set();
    const memo = connections.reduce((acc, connection) => {
        const [a, b] = connection;
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
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            fn(i);
            count++;
        }
    }
    
    function fn(node) {
        if (visited.has(node) || !memo[node]) return;
        
        visited.add(node);
        
        for (let next of memo[node]) {
            fn(next);
        }
    }
    
    
    return count - 1;
    
    
};