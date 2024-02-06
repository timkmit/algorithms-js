const startArray = [1,3,2,7,5,6,0,-4,8,-2,9,-1,10,-5]
let count = 0

function bubbleSort(inputArray){
    for (let i = 0; i < inputArray.length; i++){

        for (let j = 0; j < inputArray.length; j++){
            if(inputArray[j] > inputArray[j + 1]){
                let tmp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = tmp
            }
            count+=1
        }
    }
    return inputArray
}

console.log(bubbleSort(startArray))
console.log(count)

//O(n^2) without coefficient before n^2, then that algo worse than selection dort