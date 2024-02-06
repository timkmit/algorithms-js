const startArray = [1,3,2,7,5,6,0,-4,8,-2,9,-1,10,-5]
let count = 0

function selectionSort(inputArray){
    for (let i = 0; i < inputArray.length; i++){
        let indexMin = i
        for (let j = i + 1; j < inputArray.length; j++){
            if(inputArray[j] < inputArray[indexMin]){
                indexMin = j
            }
            count+=1
        }
        let tmp = inputArray[i]
        inputArray[i] = inputArray[indexMin]
        inputArray[indexMin] = tmp
        
    }
    return inputArray
}

console.log(selectionSort(startArray))

console.log(count)

//O(k*n^2), that k - coefficient (like 1/2 or etc), but usually never writting 