
const unsortedArray = [3,2,2,1,1,1]

function countSort(inputArray){

    if(inputArray.length < 2) return inputArray

    let maxValue = inputArray[0]

    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i] > maxValue) maxValue = inputArray[i]
    }

    const countingArray = new Array(maxValue+1)

    for(let value of inputArray){
        if(!countingArray[value]){
            countingArray[value] = 0
        }
        countingArray[value]++
    }

    const resultArray = []

    for(let i = 0; i < countingArray.length; i++){
        while(countingArray[i] > 0){
            resultArray.push(i)
            countingArray[i]--
        }
    }
    return resultArray
}

console.log(countSort(unsortedArray.slice()))

//O(n+n+k) === O(n+k)