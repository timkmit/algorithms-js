const graph ={}

graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f'] 
graph.e = ['f']
graph.f = ['g']


function BFS(graph, start, end){

    let queue = []
    queue.push(start)

    while(queue.length > 0){
        const current = queue.shift() //take start at 1 itr
        if(!graph[current]){ //if nothing - void arr
            graph[current] = []
        }
        if(graph[current].includes(end)){ //если в графе по текущей вершине массив содержит конечную точку, то завершаем программу 
            return true
        }
        else {
            queue = [...queue, ...graph[current]]
        }
        
    }
}

console.log(BFS(graph, 'a', 'f'))

//поиск в ширину используется для нахождения кратчайшего пути в графе
//не учитывается вес ребра, поэтому менее эффективен чем алгоритм Дейкстры