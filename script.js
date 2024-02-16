function mincost(arr) {
    const pq = [...arr];
    pq.sort((a, b) => a - b);
    let cost = 0;
    while (pq.length > 1) {
        const first = pq.shift();
        const second = pq.shift();
        const combined = first + second;
        cost += combined;
        pq.push(combined);
        pq.sort((a, b) => a - b);
    }
    return cost;
}

module.exports = mincost;
