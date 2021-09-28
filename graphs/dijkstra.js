let inf = 999999999;

getLower = (queue) => {
    let smallerValue = inf;
    let smallerIndex = 0;
    for (let i = 0; i < queue.length; i++) {
        if (smallerValue > queue[i].weight) {
            smallerIndex = i;
            smallerValue = queue[i].weight;
        }
    }
    return queue[smallerIndex];
}

dijkstra = (graph, k) => {
    let weights = []
    let queue = [];
    for (let i = 0; i < graph.length; i++) {
        weights.push(inf);
    }
    queue.push({ 
        node: k,
        weight: 0 
    });
    weights[k] = 0;

    while (queue.length) {
        let front = getLower(queue);
        let u = front.node;
        queue = queue.filter(a => a.node != front.node);
        for (let i = 0; i < graph[u].length; i++) {
            let v = graph[u][i].node;
            if (weights[v] > weights[u] + graph[u][i].weight) {
                queue.push({
                    node: v,
                    weight: weights[u] + graph[u][i].weight
                });
                weights[v] = weights[u] + graph[u][i].weight;
            }
        }
    }

    return Math.max(weights);
}

let graph = [
             [], 
             [ { node: 2, weight: 9 }, { node: 4, weight: 2 } ],
             [ { node: 5, weight: 1 } ],
             [ { node: 1, weight: 5 }, { node: 2, weight: 3 } ],
             [ { node: 2, weight: 4 }, { node: 5, weight: 6 } ],
             [ { node: 3, weight: 7 } ]
];