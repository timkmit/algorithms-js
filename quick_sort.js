const startArray = [1,3,2,7,5,6,0,-4,8,-2,9,-1,10,-5]
let count = 0

function quickSort(inputArray){

    if(inputArray.length <= 1){
        return inputArray
    }

    let pivotIndex = Math.floor(inputArray.length / 2)
    let pivot = inputArray[pivotIndex]
    let less = []
    let greater = []

    for(let i = 0; i < inputArray.length; i++){

        if(i === pivotIndex) continue

        if(inputArray[i] < pivot){
            less.push(inputArray[i])
        } else greater.push(inputArray[i])
        count+=1

    }
    return [...quickSort(less), pivot, ...quickSort(greater)]

}

console.log(quickSort(startArray))

console.log(count)

//O(log2n * n^2) 