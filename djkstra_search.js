const graph = {}

graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g ={}

function djkstra(graph, start, end){

    const costs = {} //обьект, который хранит минимальные стоимости ребра
    const processed = [] //массив, который хранит обработанные обьекты
    let neighbors = {}

    Object.keys(graph).forEach(node => { //обьект, в который добавляем ближайших соседей
        if(node !== start) { //в цикле добавляются вершины, до которых можно добраться со стартовой позиции
            let value = graph[start][node]
            costs[node] = value || 999999
        }
    })

    let node = findNodeLowestCost(costs, processed) //находим узел с минимальной стоимостью
    while(node){ //последовательно в цикле обновляем стоимости ребер, перебирая минимальные стоимости пути, чтобы найти минимальнейшие
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if(newCost < costs[neighbor]){
                costs[neighbor] = newCost
            }
        })
        processed.push(node) //помечаем узел как обработанный
        node = findNodeLowestCost(costs, processed) //продолжаем искать новый узел после обработки
    }
    return costs

}

function findNodeLowestCost(costs, processed){ //нахождение минимальной стоимости ребра у узла
    let lowestCost = 999999
    let lowestNode

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if(cost < lowestCost && !processed.includes(node)){
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}


console.log(djkstra(graph, 'a', 'g'))

//O(E logV) - время выполнения алгоритма Дейкстры растет логарифмически с увеличением числа вершин и ребер в графе. высокая эффективность в больших графах