const array = [1,3,2,7,5,6,0,-4,8,-2,9,-1,10,-5]
let count = 0

function quickSort(array){

    if(array.length <= 1){
        return array
    }

    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []

    for(let i = 0; i < array.length; i++){

        if(i === pivotIndex) continue

        if(array[i] < pivot){
            less.push(array[i])
        } else greater.push(array[i])
        count+=1

    }
    return [...quickSort(less), pivot, ...quickSort(greater)]

}

console.log(quickSort(array))

console.log(count)

//O(log2n * n^2) 